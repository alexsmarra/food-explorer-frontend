import { Container, SelectElement } from "./styles.js"

export const CustomSelect = () => {
   const options = [
      { value: 'refeicao', label: 'Refeição'},
      { value: 'sobremesa', label: 'Sobremesa'},
      { value: 'bebidas', label: 'Bebidas'}
   ]

   return (
      <Container className="custom-select">
         <label htmlFor="category">Categoria</label>
         <SelectElement
            classNamePrefix="custom-select" // como o proprio nome diz, classNamePrefix, um prefixo para classes base da extensão
            defaultValue={options[0]}
            options={options}
         />
      </Container>
   )
}
