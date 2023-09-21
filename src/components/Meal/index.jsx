import { useState } from "react"

import { api } from "../../services/api"

import { useAuth } from "../../hooks/auth"

import Minus from "../../assets/btns/Minus.svg"
import Plus from "../../assets/btns/Plus.svg"

import { Button } from "../Button"

import { Container } from "./styles" 

import { useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"

export const Meal = ({ data, ...rest }) => {
   const navigate = useNavigate()
   const isMobile = useMediaQuery({ maxWidth: 1536 })

   const { user } = useAuth()
   const [amount, setAmount] = useState(1)
   const [price, setPrice] = useState(parseFloat(((data.price).slice(2)).replace(/,/g, '.')))

   const handleDetails = (id) => {
      localStorage.removeItem("@foodexplorer:endPrice")
      localStorage.setItem("@foodexplorer:endPrice", JSON.stringify(price))
      localStorage.removeItem("@foodexplorer:amount")
      localStorage.setItem("@foodexplorer:amount",JSON.stringify(amount))
      navigate(`/details/${id}`)
   }

   const zeroFix = (number) => {
      if(number > 9) {
         return number
      } else {
         return "0" + number
      }
   }

   const minusPrice = () => {
      if(amount > 1) {
         setPrice(currentPrice => 
            currentPrice - parseFloat(((data.price).slice(2)).replace(/,/g, '.')))
         setAmount(currentAmount => currentAmount -1)
      } else {
         return
      }
   }
 
   const plusPrice = () => {
      // takes the current value of price and adds
      setPrice(currentPrice => 
         currentPrice + parseFloat(((data.price).slice(2)).replace(/,/g, '.')))
      setAmount(currentAmount => currentAmount + 1)
   }

   return (
      <Container {...rest} className="meal">
         <img 
            src={`${api.defaults.baseURL}/files/${data.image}`} 
            alt={`Foto de um(a) ${(data.name).toLowerCase()}`} 
            className="dish-img"
         />
         <div>
            <h3
               className="meal-name"
               onClick={() => handleDetails(data.id)}>{`${data.name} >`}
            </h3>
            {isMobile ?
               ""
            :
               <p className="description">
                  {data.description}
               </p>
            }
         </div>

         <div className='price-amount-and-incluir'>
            {
            user.isAdmin ?
               <span className="price-span">{`R$ ${price.toFixed(2).replace(/\./g, ',')}`}</span>
            :
               <div>
                  <span className="price-span">{`R$ ${(price.toFixed(2)).replace(/\./g, ',')}`}</span>
                  <div>
                     <div className="amount">
                        <button className="minus" onClick={minusPrice}>
                           <img src={Minus} alt="minus btn" />
                        </button>
                        <span>{zeroFix(amount)}</span>
                        <button className="plus" onClick={plusPrice}>
                           <img src={Plus} alt="plus btn" />
                        </button>
                     </div>
                     <Button 
                        title="incluir" 
                        className="incluir-btn"
                     />
                  </div>
               </div>
            }
         </div>
      </Container>
   )
}