import { useState } from "react"

import { api } from "../../services/api"

import { Container } from "./styles" 

export const Meal = ({ data, ...rest }) => {

   const [amount, setAmount] = useState(1)
   const [price, setPrice] = useState(parseFloat(((data.price).slice(2)).replace(/,/g, '.')));

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
      <Container {...rest}>
         <img 
            src={`${api.defaults.baseURL}/files/${data.image}`} 
            alt={`Foto de um(a) ${(data.name).toLowerCase()}`} 
         />
         <div>
            <h3>{`${data.name} >`}</h3> 
         </div>
         <p>{data.description}</p>
         <div>
            <div>
               <button className="minus" onClick={minusPrice}>-</button>
               <span>{zeroFix(amount)}</span>
               <button className="plus" onClick={plusPrice}>+</button>
            </div>
            <span className="price-span">{`R$${price.toFixed(2)}`}</span>
         </div>
      </Container>
   )
}