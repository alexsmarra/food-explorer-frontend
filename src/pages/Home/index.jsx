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

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router-dom"

export function Home() {
   const { user } = useAuth()
   const navigate = useNavigate()
   const isMobile = useMediaQuery({ maxWidth: 1536 })

   const scrollMealList = useRef(null)
   const scrollDessertList = useRef(null);
   const scrollDrinkList = useRef(null)

   const [dishes, setDishes] = useState([])
   const [imgDish, setImgDish] = useState(null)
   const [search, setSearch] = useState("")

   const [favoriteStates, setFavoriteStates] = useState({});

   const [isLeftArrowVisibleMeal, setIsLeftArrowVisibleMeal] = useState(false);
   const [isRightArrowVisibleMeal, setIsRightArrowVisibleMeal] = useState(true);
   const [isLeftArrowVisibleDessert, setIsLeftArrowVisibleDessert] = useState(false);
   const [isRightArrowVisibleDessert, setIsRightArrowVisibleDessert] = useState(true);
   const [isLeftArrowVisibleDrink, setIsLeftArrowVisibleDrink] = useState(false);
   const [isRightArrowVisibleDrink, setIsRightArrowVisibleDrink] = useState(true);

   const meals = dishes.filter(dish => dish.category === 'refeicao')
   const desserts = dishes.filter(dish => dish.category === 'sobremesa')
   const drinks = dishes.filter(dish => dish.category === 'bebidas')
   
   const toggleFavorite = (dishId) => {
     setFavoriteStates((prevState) => ({
       ...prevState,
       [dishId]: !prevState[dishId], // define como true se o valor for undefined
     }));
   };

   const runEditDish = (id, category) => {
      navigate(`/editDish/${id}/${category}`)
   }
   
   const handleScrollMeals = () => {
      const container = scrollMealList.current;
      if (container) {
         const scrollWidth = container.scrollWidth;
         const clientWidth = container.clientWidth;
         const scrollLeft = container.scrollLeft;

         setIsLeftArrowVisibleMeal(scrollLeft > 0);
         setIsRightArrowVisibleMeal(scrollWidth > clientWidth + scrollLeft) 

         if(scrollWidth == clientWidth) {
            setIsRightArrowVisibleMeal(true)
         }
      }
   };

   const handleScrollDessert = () => {
      const container = scrollDessertList.current;
      if (container) {
         const scrollWidth = container.scrollWidth;
         const clientWidth = container.clientWidth;
         const scrollLeft = container.scrollLeft;

         setIsLeftArrowVisibleDessert(scrollLeft > 0);
         setIsRightArrowVisibleDessert(scrollWidth > clientWidth + scrollLeft);
      }
   };

   const handleScrollDrink = () => {
      const container = scrollDrinkList.current;
      if (container) {
         const scrollWidth = container.scrollWidth;
         const clientWidth = container.clientWidth;
         const scrollLeft = container.scrollLeft;

         setIsLeftArrowVisibleDrink(scrollLeft > 0);
         setIsRightArrowVisibleDrink(scrollWidth > clientWidth + scrollLeft);
      }
   };

   const handlePrevMealList = () => {
      scrollMealList.current.scrollBy({
         left: -150,
         behavior: 'smooth'
      })
   }

   const handleNextMealList = () => {
      scrollMealList.current.scrollBy({
         left: 150,
         behavior: 'smooth'
      })
   }

   const handlePrevDessertList = () => {
      scrollDessertList.current.scrollBy({
         left: -150,
         behavior: 'smooth',
      })
   }

   const handleNextDessertList = () => {
      scrollDessertList.current.scrollBy({
         left: 150,
         behavior: 'smooth'
      })
   }

   const handlePrevDrinkList = () => {
      scrollDrinkList.current.scrollBy({
         left: -150,
         behavior: 'smooth'
      })
   }

   const handleNextDrinkList = () => {
      scrollDrinkList.current.scrollBy({
         left: 150,
         behavior: 'smooth'
      })
   }

   useEffect(() => {
      // Inicializar a visibilidade das setas
      handleScrollMeals();
      
      meals.lenght > 0 &&
         // Adicionar o listener de scroll
         scrollMealList.current.addEventListener('scroll', handleScrollMeals);
   }, []);

   useEffect(() => {
      handleScrollDessert();

      desserts.length > 0 &&
         scrollDessertList.current.addEventListener('scroll', handleScrollDessert);
   }, []);

   useEffect(() => {
      handleScrollDrink();

      drinks.length > 0 &&
         scrollDrinkList.current.addEventListener('scroll', handleScrollDrink);
   }, []);

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
               {meals.length > 0 ?
                  <div className="cards" ref={scrollMealList} onScroll={handleScrollMeals}>
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
                              <div>
                                 {favoriteStates[dish.id] ? (
                                    <AiFillHeart
                                       className="ai-fill-heart"
                                       onClick={() => toggleFavorite(dish.id)}
                                    />
                                 ) : (
                                    <AiOutlineHeart 
                                       className="ai-outline-heart"
                                       onClick={() => toggleFavorite(dish.id)} 
                                    />
                                 )}
                              </div>
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
                  <span>Não há pratos na categoria de refeições para essa busca</span>
               }
               {!isMobile && 
               <div className="arrows">
                  <div 
                     onClick={handlePrevMealList} 
                     direction="prev" 
                     style={{ 
                        opacity: isLeftArrowVisibleMeal ? 1 : 0
                     }}>
                        {isLeftArrowVisibleMeal && meals.length > 3 && 
                           <FiChevronLeft />
                        }
                  </div>

                  <div 
                     onClick={handleNextMealList} 
                     direction="next">
                        {isRightArrowVisibleMeal && meals.length > 3 && 
                           <FiChevronRight />
                        }
                  </div>
               </div>
               }
            </Section>

            <Section title="Sobremesas">
               {desserts.length > 0 ?
                  <div className="cards" ref={scrollDessertList} onScroll={handleScrollDessert}>
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
                              <div>
                                 {favoriteStates[dish.id] ? (
                                    <AiFillHeart
                                       className="ai-fill-heart"
                                       onClick={() => toggleFavorite(dish.id)}
                                    />
                                 ) : (
                                    <AiOutlineHeart 
                                       className="ai-outline-heart"
                                       onClick={() => toggleFavorite(dish.id)} 
                                    />
                                 )}
                              </div>
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
                  <span>Não há pratos na categoria de sobremesas para essa busca</span>
               }
               {!isMobile && 
               <div className="arrows">
                  <div 
                     onClick={handlePrevDessertList} 
                     direction="prev"
                     style={{ opacity: isLeftArrowVisibleDessert ? 1 : 0 }}
                  >
                     {isLeftArrowVisibleDessert && desserts.length > 3 && 
                        <FiChevronLeft />
                     }
                  </div>

                  <div onClick={handleNextDessertList} direction="next">
                     {isRightArrowVisibleDessert && desserts.length > 3 && 
                        <FiChevronRight />
                     }
                  </div>
               </div>
               } 
            </Section>

            <Section title="Bebidas">
               {drinks.length > 0 ?
                  <div className="cards" ref={scrollDrinkList} onScroll={handleScrollDrink}>
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
                              <div>
                                 {favoriteStates[dish.id] ? (
                                    <AiFillHeart
                                       className="ai-fill-heart"
                                       onClick={() => toggleFavorite(dish.id)}
                                    />
                                 ) : (
                                    <AiOutlineHeart 
                                       className="ai-outline-heart"
                                       onClick={() => toggleFavorite(dish.id)} 
                                    />
                                 )}
                              </div>
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
                  <span>Não há pratos na categoria de bebidas para essa busca</span>
               } 
               {!isMobile && 
               <div className="arrows">
                  <div onClick={handlePrevDrinkList} direction="prev">
                     {isLeftArrowVisibleDrink && drinks.length > 3 && 
                        <FiChevronLeft />
                     }
                  </div>

                  <div onClick={handleNextDrinkList} direction="next">
                     {isRightArrowVisibleDrink && drinks.length > 3 && 
                        <FiChevronRight />
                     }
                  </div>
               </div>
               }  
            </Section>
         </div>

         <Footer />
      </Container>
   )
}