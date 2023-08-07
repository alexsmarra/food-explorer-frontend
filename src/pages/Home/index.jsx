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
import { useNavigate } from "react-router-dom"

export function Home() {
   const { user } = useAuth()
   const navigate = useNavigate()

   const [dishes, setDishes] = useState([])
   const [imgDish, setImgDish] = useState(null)
   const [search, setSearch] = useState("")

   const isMobile = useMediaQuery({ maxWidth: 1023 })

   const runEditDish = (id, category) => {
      navigate(`/editDish/${id}/${category}`)
   }

   useEffect(() => {
      const fetchDishes = async () => {
         try {
            const response = await api.get(`/dishes?search=${search}`)
            setDishes(response.data)
         } catch(error) {
            console.log(error)
         }
      }

      fetchDishes()
   }, [search])
   
   useEffect(() => {
      const fetchImagesDishes = async () => {
         setImgDish(`${api.defaults.baseURL}/files/${dishes.image}`)
      }

      fetchImagesDishes()
   })

   return (
      <Container>
         {user.isAdmin ?
         <HeaderAdmin setSearch={setSearch} />
         :
         <HeaderUser setSearch={setSearch} />
         }

         <Banner />

         <Section title="Refeições">
         {
            dishes.filter(dishes => dishes.category === "refeicao").map((dish, index) => ( 
            
               <div 
                  key={dish.id}
                  className="meal-wrapper">
                  
                     {
                     user.isAdmin ?
                     <BsPencil
                        onClick={() => runEditDish(dish.id, dish.category)}
                     />
                     :
                     <AiOutlineHeart />
                     }
                     
                     <Meal
                        key={String(index)}
                        data={dish}
                     />
               </div>
            ))     
         }
         </Section>

         <Section title="Sobremesas">
         {
            dishes.filter(dishes => dishes.category === "sobremesa").map((dish, index) => ( 
            
               <div 
                  key={String(index)}
                  className="meal-wrapper">
                  
                     {
                     user.isAdmin ?
                     <BsPencil 
                        onClick={() => runEditDish(dish.id, dish.category)}
                     />
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
            dishes.filter(dishes => dishes.category === "bebidas").map((dish, index) => ( 
            
               <div 
                  key={String(index)}
                  className="meal-wrapper">
                  
                     {
                     user.isAdmin ?
                     <BsPencil 
                     onClick={() => runEditDish(dish.id, dish.category)}
                     />
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