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
   const [name, setName] = useState("")
   const categoryParams = params.category
   // const [selectedCategory, setSelectedCategory] = useState(categoryParams)
   const [ing, setIng] = useState([])
   const [tags, setTags] = useState([])
   const [newTag, setNewTag] = useState("")
   const [price, setPrice] = useState("")
   const [description, setDescription] = useState("")

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

   useEffect(() => {
      const fetchDish = async () => {
         try {
            const response = await api.get(`/dishes/${params.id}`)
            setDish(response.data)
            setIng((response.data.ingredients).split(',').map(ingredient => ingredient))
         } catch(error) {
            console.log(error)
         }
      }

      fetchDish()
   })

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
            {     dish.ingredients && 
                  dish.ingredients.split(',').map((ingredient, index) => (

                     <IngredientsItem
                        isNew={false} 
                        key={String(index)}
                        value={ingredient}
                     />
                  ))
            }
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
      
      />
  </div>
</Form>

<Footer />
      </Container>
   )
}