import { Container } from "./styles.js"

export const Select = () => {
   return (
      <Container className="select">
         <label htmlFor="category">Categoria</label>
         <select name="" id="category">
            <option value="refeicao">Refeição</option>
            <option value="sobremesa">Sobremesa</option>
            <option value="bebidas">Bebidas</option>
         </select>
      </Container>
   )
}