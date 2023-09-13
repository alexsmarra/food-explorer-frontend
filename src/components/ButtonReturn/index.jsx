import { Container } from "./styles"

import CaretLeft from "../../assets/btns/CaretLeft.svg"

export const ButtonReturn = ({ title, ...rest }) => {
   return (
      <Container className="button-return">
         <div>
            <button {...rest}>
               <img src={CaretLeft} alt="Caret left to page return" />
               <span>voltar</span>
            </button>
         </div>
         <h2>{title}</h2>
      </Container>
   )
}