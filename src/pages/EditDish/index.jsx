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
import { useMediaQuery } from "react-responsive"
import { toast } from 'react-toastify';


export const EditDish = () => {
   const navigate = useNavigate()
   const params = useParams()
   const isDesktop = useMediaQuery({ minWidth: 1536 })

   const [dish, setDish] = useState([])

   const [image, setImage] = useState()
   const [name, setName] = useState("")
   const categoryParams = params.category
   const [selectedCategory, setSelectedCategory] = useState(categoryParams)
   // novo estado para armazenar os ingredientes 
   const [ingredientList, setIngredientList] = useState([]) 
   const [tags, setTags] = useState([])
   const [newTag, setNewTag] = useState("")
   const [price, setPrice] = useState("")
   const [description, setDescription] = useState("")

   console.log(`ingredientList: ${ingredientList}`)
   console.log(`tags : ${tags}`)
   const teste = tags.length > 0 ? [...tags, ...ingredientList] : [...ingredientList]
   console.log(`teste: ${teste}`)
   console.log(price)

   const handleNavigate = () => {
      navigate(-1)
   }

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

   async function handleEditDish() {
      
      const formData = new FormData()
      
      const response = await api.get(`/dishes/${params.id}`)
      const meal = response.data

      const fieldsToCheck = [
         { title: 'name', value: meal.name, input: name},
         { title: 'category', value: meal.category, input: selectedCategory},
         { title: 'price', value: meal.price, input: price},
         { title: 'description', value: meal.description, input: description}
      ]



      fieldsToCheck.forEach(field => {
         if(field.input.length == 0) {
            formData.append(field.title, field.value)
         } else {
            formData.append(field.title, field.input)
         }
      })

      const allIngredients = tags.length > 0 ? [...tags, ...ingredientList] : [...ingredientList]

      if(image) formData.append("image", image)
      
      formData.append("ingredients", allIngredients)

      try { 
         await api.patch(`/dishes/${params.id}`, formData)
            toast.success("Prato atualizado com sucesso!", {
               autoClose: 2000
            })
            navigate("/")
      } catch( error) {
         if(error.response) {
            toast.error(error.response.data.message, {autoClose: 2000})
         } else {
            toast.error("Erro ao atualizar prato!", {autoClose: 2000})
         }
      }
   }

   async function handleDeleteDish() {
      const confirm = window.confirm("Quer realmente deletar esse prato?")

      if(confirm) {
         await api.delete(`/dishes/${params.id}`)
         toast.success(`Prato ${dish.name} excluído com sucesso!`, {autoClose: 2000})
         navigate("/")
      } else {
         ""
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

         <ButtonReturn 
            title="Editar prato" 
            onClick={handleNavigate}   
         />

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
               {isDesktop ?
                  <div className="wrapper-ingredientsAndInputLabel">
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
                  </div>
               :
                  <>
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
                        placeholder="R$00,00"
                        onChange={handlePriceChange}
                        value={price}
                     />
                  </>
               }     

               <Textarea
                  placeholder={dish.description}
                  onChange={e => setDescription(e.target.value)}
               />

               <div className="buttons">
               
                  <Button 
                     className="btn-form-excluir"
                     title="Excluir prato"   
                     onClick={handleDeleteDish}   
               
                  />
                  <Button
                     className="btn-form-save" 
                     title="Salvar alterações"
                     onClick={handleEditDish}
                  />
               </div>
            </div>
         </Form>

         <Footer />
      </Container>
   )
}