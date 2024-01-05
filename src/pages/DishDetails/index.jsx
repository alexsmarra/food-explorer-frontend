import { useEffect, useState } from "react"

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import { HeaderUser } from "../../components/HeaderUser"
import { ButtonReturn } from "../../components/ButtonReturn"
import { IngredientsTag } from "../../components/IngredientsTag"
import { Button } from "../../components/Button"
import { ButtonImg } from "../../components/ButtonImg"
import { Footer } from "../../components/Footer"

import { Container, Content } from "./styles"

import { useParams, useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"

export const DishDetails = () => {
   const params = useParams()
   const navigate = useNavigate()
   const { user } = useAuth()
   const isMobile = useMediaQuery({ maxWidth: 1536 })

   let priceLocalStorage = localStorage.getItem("@foodexplorer:endPrice")
   priceLocalStorage = JSON.parse(priceLocalStorage)
   priceLocalStorage = priceLocalStorage.toFixed(2)

   let amountLocalStorage = localStorage.getItem("@foodexplorer:amount")
   amountLocalStorage = parseFloat(amountLocalStorage)

   const [dish, setDish] = useState([])
   let ingredientsString = String(dish.ingredients)
   ingredientsString = ingredientsString.split(",")
   
   const [nameImageLowerCase, setNameImageLowerCase] = useState("")
   const [fixEndPrice, setFixEndPrice] = useState(priceLocalStorage)
   const [amount, setAmount] = useState(amountLocalStorage)

   const handleNavigate = () => {
      navigate(-1)
   }

   const zeroFix = (number) => {
      if(number > 9) {
         return number
      } else {
         return "0" + number
      }
   }

   const minusPrice = () => {
      let priceDish = dish.price
      priceDish = priceDish.slice(2)
      priceDish = priceDish.replace(/,/g, '.')
      priceDish = parseFloat(priceDish)

      if(amount > 1) {
         setFixEndPrice(current => 
            (parseFloat(current) - priceDish).toFixed(2)
         )
         setAmount(currentAmount => currentAmount - 1)
      } else {
         return
      }
   }

   const plusPrice = () => {
      // takes the current value of price and adds
      let priceDish = dish.price
      priceDish = priceDish.slice(2)
      priceDish = priceDish.replace(/,/g, '.')
      priceDish = parseFloat(priceDish)
      
      setFixEndPrice(current => 
         (parseFloat(current) + priceDish).toFixed(2)
      )

      setAmount(currentAmount => currentAmount + 1)
   }

   const runEditDish = (id, category) => {
      navigate(`/editDish/${id}/${category}`)
   }

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
   
   return (
      <Container>
         {user.isAdmin ?
            <HeaderAdmin />
         :
            <HeaderUser />
         }
 
         <Content>
            <main>
               <div className="wrapper-details-one">
                  <ButtonReturn 
                     onClick={handleNavigate}
                  />

                  <img 
                     src={`${api.defaults.baseURL}/files/${dish.image}`} 
                     alt={`Foto de um(a) ${nameImageLowerCase}`}
                     className="dish-image" 
                  />
               </div>

               <div className="wrapper-details-two">
                  <p>{dish.name}</p>
                  <p>{dish.description}</p>
                  <div className="ingredients">
                     {
                       ingredientsString.map((item, index) => (
                        <IngredientsTag key={String(index)} title={item}/>
                     )) 
                     }
                  </div>
                  {user.isAdmin ?
                     <Button 
                        title="Editar prato"
                        className="btn-edit-dish"
                        onClick={() => runEditDish(dish.id, dish.category)}
                     />
                  :
                  <div className="wrapper-amount-and-price">
                     <div className="amount">
                        <button className="minus" onClick={minusPrice}>-</button>
                        <span>{zeroFix(amount)}</span>
                        <button className="plus" onClick={plusPrice}>+</button>
                     </div>
                     <span className="price"> 
                        
                        {isMobile ?

                        <ButtonImg className="btn-img" />  
                        :
                           ""
                        }
                        {isMobile ?
                           "pedir . "
                        :
                           "incluir . "
                        }
                        R$ {fixEndPrice.replace(/\./g, ',')}
                     </span>       
                  </div>
                  }
               </div>
            </main>
         </Content>
         
         <Footer className="footer" />
      </Container>
   )
}
