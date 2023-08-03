import { useState, useEffect } from "react"
import { api } from "../../services/api"

import { Container, Form } from "./styles"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import { ButtonReturn } from "../../components/ButtonReturn"
import { Input } from "../../components/Input"
import { InputLabel } from "../../components/InputLabel"
import { CustomSelect } from "../../components/CustomSelect"
import { IngredientsItem } from "../../components/IngredientsItem"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

import { BiUpload } from "react-icons/bi";

import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify';

export const EditDish = () => {
   const navigate = useNavigate()
   const params = useParams()

   const [dish, setDish] = useState([])

   const [image, setImage] = useState(null)
   // const [name, setName] = useState("")
   const categoryParams = params.category
   const [selectedCategory, setSelectedCategory] = useState(categoryParams)
   // novo estado para armazenar os ingredientes 
   const [ingredientList, setIngredientList] = useState([]) 
   const [tags, setTags] = useState([])
   const [newTag, setNewTag] = useState("")
   const [price, setPrice] = useState("")
   const [description, setDescription] = useState("")

   console.log(dish)

   const handleCategoryChange = category => {
      setSelectedCategory(category.value)
   }
 
   function handleAddTag() {
      if(newTag.length > 0) {
         setTags(prevState => [...prevState, newTag])
         setNewTag("")
      } else {
         return
      }
   }

   function handleRemoveIngredient(deleted) {
      setIngredientList(prevState => prevState.filter(ingredient => ingredient !== deleted))
   }

   function handleRemoveTag(deleted) {
      setTags(prevState => prevState.filter(tag => tag !== deleted))
   }

   const handlePriceChange = e => {
      let inputPrice = e.target.value.replace(/[^0-9,]/g, '')

      const commaIndex = inputPrice.indexOf(",")

      if(commaIndex !== -1) {
         inputPrice = 
            inputPrice.slice(0, commaIndex + 1) + 
            inputPrice.slice(commaIndex + 1).replace(/,/g, '')
      }
      
      const newPrice = inputPrice.length > 0 ? `R$${inputPrice}` : ''
      setPrice(newPrice)
   }   

   console.log(params.id)

   async function handleEditDish() {
      
      const formData = new FormData()

      // const fieldsToCheck = [
      //    // { name: 'image', value: image},
      //    { name: 'name', value: name },
      //    // { name: 'category', value: selectedCategory},
      //    // { name: "ingredients", value: ingredientList}
      //    // { name: 'price', value: price},
      //    // { name: 'description', value: description}
      // ]

      // fieldsToCheck.forEach(field => {
      //    if(field.value.length == 0) {
      //       formData.append(field.name, dish[field.name])
      //    } else {
      //       formData.append(field.name, field.value)
      //    }
      // })

      /* A ideia do array e forEach acima é para fazer o que está abaixo com cada um */
      // if(name.length == 0) {
      //    formData.append('name', dish.name)
      // } else {
      //    formData.append('name', name)
      // }

      const name = "batata"
      formData.append('name', name)

      try { 
         await api.patch(`/dishes/${params.id}`, formData)
            toast.success("Name atualizado com sucesso!", {
               autoClose: 1000
            })
      } catch( error) {
         if(error.response) {
            toast.error(error.response.data.message, {autoClose: 1000})
         } else {
            toast.error("Erro ao atualizar prato!", {autoClose: 1000})
         }
      }
   }

   useEffect(() => {
      const fetchDish = async () => {
         try {
            const response = await api.get(`/dishes/${params.id}`)
            setDish(response.data)

            if(response.data.ingredients) {
               const ingredients = response.data.ingredients.split(',').map(ingredient => 
                  /* mesmo não necessitando, é importante fazer trim quando estamos lidando com 
                  dados e string e o map, afim de evitar erros */
                  ingredient.trim())
               setIngredientList(ingredients)
            }
         } catch(error) {
            console.log(error)
         }
      }

      fetchDish()
   }, [])

   return (
   <Container>
      <HeaderAdmin />

      <ButtonReturn title="Editar prato" />

      <Form>
         <div className="wrapper-inputs-one">
               <div className="wrapper-img-input">
                  <label htmlFor="img-input">
                     <span>Imagem do prato</span>
                     <Input 
                        id="img-input" 
                        type="file" 
                        icon={BiUpload}
                        text="Selecione imagem para alterá-la"
                        onChange={e => setImage(e.target.files[0])}
                     />
                  </label>
               </div>

               <InputLabel 
                  title="Nome" 
                  className="input-value"
                  placeholder={dish.name}
                  onChange={e => setName(e.target.value)}
               />

               <CustomSelect 
                  onChange={handleCategoryChange}
                  categoryParams={categoryParams}
               />
         </div> 

         <div className="wrapper-inputs-two">
               <div className="ingredients">
                  <span>Ingredientes</span>
                  <div className="tags">
                     {ingredientList.map((ingredient, index) => (
                        <IngredientsItem 
                           isNew={false}
                           key={String(index)}
                           value={ingredient}
                           onClick={() => handleRemoveIngredient(ingredient)}
                        />
                     ))}
                     {
                        tags.map((tag, index) => (
                           <IngredientsItem 
                              isNew={false}
                              key={String(index)}
                              value={tag}
                              onClick={() => handleRemoveTag(tag)}
                           />
                        ))
                     }

                     <IngredientsItem 
                        isNew={true}
                        placeholder="Adicionar"
                        value={newTag}
                        onChange={e => setNewTag(e.target.value)}
                        onClick={handleAddTag}
                     />

                  </div>
               </div>

               <InputLabel 
                  title="Preço" 
                  placeholder={dish.price}
                  onChange={handlePriceChange}
                  value={price}
               />

               <Textarea
                  placeholder={dish.description}
                  onChange={e => setDescription(e.target.value)}
               />

               <Button
                  className="btn-form" 
                  title="Salvar alterações"
                  onClick={handleEditDish}
               />
         </div>
      </Form>

      <Footer />
   </Container>
   )
}