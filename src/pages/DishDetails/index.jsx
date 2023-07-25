import { useEffect, useState } from "react"

import { api } from "../../services/api"

import { Container } from "./styles"

import { useParams } from "react-router-dom"

export const DishDetails = () => {
   const params = useParams()
   const [dish, setDish] = useState([])
   const [nameImageLowerCase, setNameImageLowerCase] = useState("")
   const [fixEndPrice, setFixEndPrice] = useState("")

   useEffect(() => {
      const fetchDish = async () => {
         try {
            const response = await api.get(`/dishes/${params.id}`)
            setDish(response.data)
         } catch(error) {
            console.log(error)
         }
      }
      fetchDish()
   }) 

   useEffect(() => {
      setNameImageLowerCase((String(dish.name)).toLowerCase())
   })

   let ingredientsString = String(dish.ingredients)
   ingredientsString = ingredientsString.split(",")

   useEffect(() => {
      const endPrice = localStorage.getItem("@foodexplorer:endPrice")
      JSON.parse(endPrice)
      setFixEndPrice(parseFloat(endPrice).toFixed(2))
   })
   
   return (
      <Container>
         <img 
            src={`${api.defaults.baseURL}/files/${dish.image}`} 
            alt={`Foto de um(a) ${nameImageLowerCase}`} 
         />
         <p>{dish.name}</p>
         <p>{dish.description}</p>
         <div>
            {
               ingredientsString.map((item, index) => (
                  <div key={String(index)}>{item}</div>
               ))
            }
            <p>{dish.ingredients}</p>
         </div>
         <h1>R$ {fixEndPrice}</h1>       
      </Container>
   )
}