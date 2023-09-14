import { Container } from "./styles"

import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

export const IngredientsItem = ({ isNew, value, onClick, ...rest }) => {
   return (
      /* o 'isnew' minusculo é por conta da atualização do styled-components, precisa ser minúsculo
      para ser usado em nosso style.js e passar para string */
      <Container 
         className="ingredients-item" 
         isnew={isNew.toString()}
      >
         <input 
            type="text"
            value={value}
            readOnly={!isNew} 
            {...rest}
         />

         <button
            type="button"
            onClick={onClick}
            className={isNew ? 'btn-add' : 'btn-delete'}
         >  
            {isNew ? <AiOutlinePlus /> : <AiOutlineClose />}
         </button>
      </Container>
   )
}

