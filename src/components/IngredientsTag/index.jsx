import { Container } from "./styles"

export const IngredientsTag = ({ title, ...rest }) => {
   return (
      <Container {...rest}>
         {title}
      </Container>
   )
}