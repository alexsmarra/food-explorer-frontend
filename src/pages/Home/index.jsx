import { useState, useEffect } from "react"

import { api } from "../../services/api"

import { useAuth } from "../../hooks/auth"

import { Container } from "./styles"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import { HeaderUser } from "../../components/HeaderUser"
import { Banner } from "../../components/Banner"
import { Section } from "../../components/Section"
import { Meal } from "../../components/Meal"
import { Footer} from "../../components/Footer"

import { AiOutlineHeart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

import { useMediaQuery } from "react-responsive"

export function Home() {
   const { user } = useAuth()
   const [dishes, setDishes] = useState([])
   const [imgDish, setImgDish] = useState(null)

   const isMobile = useMediaQuery({ maxWidth: 1023})

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
   
   useEffect(() => {
      const fetchImagesDishes = async () => {
         setImgDish(`${api.defaults.baseURL}/files/${dishes.image}`)
      }

      fetchImagesDishes()
   })

   return (
      <Container>
         {user.isAdmin ?
         <HeaderAdmin />
         :
         <HeaderUser />
         }

         <Banner />

         <Section title="Refeições">
         {
            dishes.filter(dishes => dishes.category === "refeicao").map(dish => ( 
            
               <div 
                  key={dish.id}
                  className="meal-wrapper">
                  
                     {
                     user.isAdmin ?
                     <BsPencil />
                     :
                     <AiOutlineHeart />
                     }
                     
                     <Meal
                        key={dish.name}
                        data={dish}
                     />
               </div>
            ))     
         }
         </Section>

         <Section title="Sobremesas">
         {
            dishes.filter(dishes => dishes.category === "sobremesa").map(dish => ( 
            
               <div 
                  key={dish.id}
                  className="meal-wrapper">
                  
                     {
                     user.isAdmin ?
                     <BsPencil />
                     :
                     <AiOutlineHeart />
                     }
                     
                     <Meal
                        key={dish.name}
                        data={dish}
                     />
               </div>
            ))     
         }   
         </Section>

         <Section title="Bebidas">
         {
            dishes.filter(dishes => dishes.category === "bebidas").map(dish => ( 
            
               <div 
                  key={dish.id}
                  className="meal-wrapper">
                  
                     {
                     user.isAdmin ?
                     <BsPencil />
                     :
                     <AiOutlineHeart />
                     }
                     
                     <Meal
                        key={dish.name}
                        data={dish}
                     />
               </div>
            ))     
         }          
         </Section>

         <Footer />
      </Container>
   )
}