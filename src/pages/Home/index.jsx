import { useState, useEffect, useRef } from "react"

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
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router-dom"

export function Home() {
   const { user } = useAuth()
   const navigate = useNavigate()

   const scrollMealList = useRef(null)

   const [dishes, setDishes] = useState([])
   const [imgDish, setImgDish] = useState(null)
   const [search, setSearch] = useState("")

   const isMobile = useMediaQuery({ maxWidth: 1023 })

   const handlePrevMealList = () => {
      scrollMealList.current.scrollBy({
         left: -120,
         behavior: 'smooth'
      })
   }

   const handleNextMealList = () => {
      scrollMealList.current.scrollBy({
         left: 120,
         behavior: 'smooth'
      })
   }

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

         <div className="meals">
            <Section title="Refeições" className="refeicoes">
               <div className="cards" ref={scrollMealList}>
               {
               dishes.filter(dishes => dishes.category === "refeicao").map((dish, index) => ( 
               
                  <div 
                     key={dish.id}
                     className="meal-wrapper">
                     
                        {
                        user.isAdmin ?
                        <BsPencil
                           className="bs-pencil"
                           onClick={() => runEditDish(dish.id, dish.category)}
                        />
                        :
                        <AiOutlineHeart 
                           className="ai-outline-heart"
                        />
                        }
                        
                        <Meal
                           key={String(index)}
                           data={dish}
                           className="meal"
                        />
                  </div>
               ))     
               }
               </div>
               {!isMobile && 
               <div className="arrows">
                  <div onClick={handlePrevMealList} direction="prev">
                     <FiChevronLeft />
                  </div>

                  <div>

                  <FiChevronRight onClick={handleNextMealList} direction="next"/>
                  </div>
               </div>
               }
            </Section>

            <Section title="Sobremesas">
               <div className="cards">
               {
               dishes.filter(dishes => dishes.category === "sobremesa").map((dish, index) => ( 
               
                  <div 
                     key={String(index)}
                     className="meal-wrapper">
                     
                        {
                        user.isAdmin ?
                        <BsPencil 
                           className="bs-pencil"
                           onClick={() => runEditDish(dish.id, dish.category)}
                        />
                        :
                        <AiOutlineHeart 
                           className="ai-outline-heart"
                        />
                        }
                        
                        <Meal
                           key={dish.name}
                           data={dish}
                           className="meal"
                        />
                  </div>
               ))     
               }
               </div>   
            </Section>

            <Section title="Bebidas">
               <div className="cards">
               {
               dishes.filter(dishes => dishes.category === "bebidas").map((dish, index) => ( 
               
                  <div 
                     key={String(index)}
                     className="meal-wrapper">
                     
                        {
                        user.isAdmin ?
                        <BsPencil
                           className="bs-pencil"
                           onClick={() => runEditDish(dish.id, dish.category)}
                        />
                        :
                        <AiOutlineHeart 
                           className="ai-outline-heart"
                        />
                        }
                        
                        <Meal
                           key={dish.name}
                           data={dish}
                           className="meal"
                        />
                  </div>
               ))     
               }     
               </div>     
            </Section>
         </div>

         <Footer />
      </Container>
   )
}