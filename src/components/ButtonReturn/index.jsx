import { Container } from "./styles"

import CaretLeft from "../../assets/btns/CaretLeft.svg"

export const ButtonReturn = ({ title }) => {
   return (
      <Container className="button-return">
         <div>
            <button>
               <img src={CaretLeft} alt="Caret left to page return" />
               <span>voltar</span>
            </button>
         </div>
         <h2>{title}</h2>
      </Container>
   )
}