import { useEffect, useState } from "react"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import { Container, Head, HeadTwo } from "./styles.js"

import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Meal } from "../../components/Meal"
import { Footer } from "../../components/Footer"

import Close from "../../assets/menu/Close.svg"
import { FiSearch } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

import { useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"

export const Menu = () => {
   const { user, signOut } = useAuth()
   const navigate = useNavigate()
   const itsNotMobile = useMediaQuery({ minWidth: 1023 });

   const [dishes, setDishes] = useState([])
   const [imgDish, setImgDish] = useState(null)
   const [search, setSearch] = useState("")

   const meals = dishes.filter(dish => dish.category === 'refeicao')
   const desserts = dishes.filter(dish => dish.category === 'sobremesa')
   const drinks = dishes.filter(dish => dish.category === 'bebidas')

   function handleCloseButton() {
      navigate(-1)
   }

   async function handleSignOut() {
      signOut()
      navigate(-1)
   }

   const runEditDish = (id, category) => {
      navigate(`/editDish/${id}/${category}`)
   }

   useEffect(() => { 
      if(itsNotMobile) navigate(-1)

   }, [itsNotMobile, navigate])

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
         <Head>
            <button onClick={handleCloseButton}>
               <img src={Close} alt="Close icon button" />
            </button>

            <span>Menu</span>
         </Head>

         <HeadTwo>
            <div className="input-div">
               <Input 
                  icon={FiSearch}
                  placeholder="Busque por pratos ou ingredientes"
                  onChange={e => setSearch(e.target.value)}
               />
            </div>

            <div>
               {user.isAdmin == 1 &&
                  <>
                     <button onClick={() => navigate("/newDish")}>Novo Prato</button>
                     <hr className="hr" />
                  </>
               }

                  <>
                     <button onClick={handleSignOut}>Sair</button>
                     <hr />
                  </>
            </div>
         </HeadTwo>

         {search.length > 0 &&
            <div className="meals">
            <Section title="Refeições" className="refeicoes">
               {meals.length > 0 ?
                  <div className="cards">
                     {dishes.filter(dishes => dishes.category === "refeicao").map((dish, index) => ( 
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
               :
                  <span className="empty-dishes">Não há pratos na categoria de refeições para essa busca</span>
               }
            </Section>

            <Section title="Sobremesas">
               {desserts.length > 0 ?
                  <div className="cards">
                     {dishes.filter(dishes => dishes.category === "sobremesa").map((dish, index) => ( 
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
               :
                  <span className="empty-dishes">Não há pratos na categoria de sobremesas para essa busca</span>
               }
            </Section>

            <Section title="Bebidas">
               {drinks.length > 0 ?
                  <div className="cards">
                     {dishes.filter(dishes => dishes.category === "bebidas").map((dish, index) => ( 
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
               :
                  <span className="empty-dishes">Não há pratos na categoria de bebidas para essa busca</span>
               } 
            </Section>
         </div>
         }

         <Footer />
      </Container>
   )
}