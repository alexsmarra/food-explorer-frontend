import { useState, useEffect } from "react"

import { api } from "../../services/api"

import { Container } from "./styles"

export const Dish = () => {
   const [dishes, setDishes] = useState([])
   const [imgDish, setImgDish] = useState(null)

   useEffect(() => {
      const fetchImagesDishes = async () => {
         setImgDish(`${api.defaults.baseURL}/files/${dishes.image}`)
      }

      fetchImagesDishes()
   })

   useEffect(() => {
      const fetchDishes = async () => {
         try {
            const response = await api.get("/dishes")
            setDishes(response.data)
         } catch(error) {
            console.log(error)
         }
      }

      fetchDishes()
   }, [])

   return (
      <Container>
         {
            dishes.map((dish) => (
               <div key={dish.id}>
                     <h2>{dish.price}</h2>
                     <p>{dish.description}</p>
                     <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt={dish.image} />
               </div>
            )) 
         }
      </Container>
   )
}