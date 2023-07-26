import { Container } from "./styles"

export const ButtonMinusPlus = ({ onClick, ...rest }) => {
   return (
      <Container {...rest}>
         <button className="minus">-</button>
         <span></span>
         <button className="plus">+</button>
      </Container>
   )
}