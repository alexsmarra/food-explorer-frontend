import { Container } from "./styles"

export const IngredientsTag = ({ title, ...rest }) => {
   return (
      <Container {...rest} className="ingredients-tag">
         {title}
      </Container>
   )
}