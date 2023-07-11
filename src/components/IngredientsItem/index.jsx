import { Container } from "./styles"

import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

export const IngredientsItem = ({ isNew, value, onClick, ...rest }) => {
   return (
      <Container isNew={isNew}>
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

