import { useEffect, useState } from "react"

import { api } from "../../services/api"

import { Container } from "./styles"

import { useParams } from "react-router-dom"

export const DishDetails = () => {
   const [dish, setDish] = useState([])
   const params = useParams()

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

   return (
      <Container>
         <h1>fafafaf{dish.price}</h1>
         <p>afafa</p>
      </Container>
   )
}