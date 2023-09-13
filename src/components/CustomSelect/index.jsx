import { useState } from "react"

import { Container, SelectElement } from "./styles.js"

export const CustomSelect = ({ categoryParams, ...rest }) => {

   const [options, setOptions] = useState(
      window.location.pathname === "/newDish" ? [
         { value: "escolha", label: "Escolha uma categoria" },
         { value: "refeicao", label: "Refeição" },
         { value: "sobremesa", label: "Sobremesa" },
         { value: "bebidas", label: "Bebidas" }
       ]
     : [
         { value: "refeicao", label: "Refeição" },
         { value: "sobremesa", label: "Sobremesa" },
         { value: "bebidas", label: "Bebidas" }
       ]
   )
   const [selected, setSelectedOption] = useState(null)

   const indexCategoryParams = options.findIndex(opt => opt.value === categoryParams)
   
   return (
      <Container className="custom-select">
         <label htmlFor="category">Categoria</label>
         <SelectElement
            className="select-custom"  
            classNamePrefix="custom-select" // como o proprio nome diz, classNamePrefix, um prefixo para classes base da extensão
            defaultValue={options[indexCategoryParams] || options[0]}
            options={options}
            onChange={selectedOption => setSelectedOption(selectedOption)}
            {...rest}
         />
      </Container>
   )
}
