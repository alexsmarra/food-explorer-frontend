import { useEffect, useState } from "react"

import { api } from "../../services/api"

import { Container } from "./styles"

import { useParams } from "react-router-dom"

export const DishDetails = () => {
   const params = useParams()
   const [dish, setDish] = useState([])
   const [nameImageLowerCase, setNameImageLowerCase] = useState("")

   let priceLocalStorage = localStorage.getItem("@foodexplorer:endPrice")
   priceLocalStorage = JSON.parse(priceLocalStorage)
   priceLocalStorage = priceLocalStorage.toFixed(2)

   const [fixEndPrice, setFixEndPrice] = useState(priceLocalStorage)

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

   let ingredientsString = String(dish.ingredients)
   ingredientsString = ingredientsString.split(",")

   // useEffect(() => {
   //    const endPrice = localStorage.getItem("@foodexplorer:endPrice")
   //    JSON.parse(endPrice)
   //    setFixEndPrice(parseFloat(endPrice).toFixed(2))
   // })

   
   /////////////////////////////////////////////////////////////////////////////////

   let amountLocalStorage = localStorage.getItem("@foodexplorer:amount")
   amountLocalStorage = parseFloat(amountLocalStorage)
   const [amount, setAmount] = useState(amountLocalStorage)

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

      if(amount > "1") {
         console.log(amount)
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
   
   return (
      <Container>
         <img 
            src={`${api.defaults.baseURL}/files/${dish.image}`} 
            alt={`Foto de um(a) ${nameImageLowerCase}`} 
         />
         <p>{dish.name}</p>
         <p>{dish.description}</p>
         <div>
            {
               ingredientsString.map((item, index) => (
                  <div key={String(index)}>{item}</div>
               ))
            }
         </div>
         <div>
            <h1>R$ {fixEndPrice.replace(/\./g, ',')}</h1>       
            <div>
               <button className="minus" onClick={minusPrice}>-</button>
               <span>{zeroFix(amount)}</span>
               <button className="plus" onClick={plusPrice}>+</button>
            </div>
         </div>
      </Container>
   )
}