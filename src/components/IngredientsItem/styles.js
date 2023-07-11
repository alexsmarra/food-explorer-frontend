import styled from "styled-components"

export const Container = styled.div`
   display: flex;
   align-items: center;

   border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.PLACEHOLDER_INPUT_COLOR}` 
                                         : "none"};
   border-width: 2px; 

   background-color: ${({ theme, isNew }) => isNew ? "transparent" 
                                                   : theme.COLORS.MEDIUM_GRAY};
   border-radius: 8px;
   padding: 0rem .7rem;

   /* margin-bottom: 8px; */
   /* padding-right: 16px; */

   input {
      // setando como padrão do html (pois no global tem propriedades alteradas)
      appearance: auto;
      background-color: initial;
      padding: 1px 0.5em;
      // 

      width: 75px;

      border: none;
      &::placeholder {
         color: ${({ theme, isNew }) => isNew ? theme.COLORS.PLACEHOLDER_INPUT_COLOR
                                              : theme.COLORS.MAIN_COLOR};
         font-size: 1.2rem;
      }
   }


   button.btn-add {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT_COLOR};
      font-size: 1.2rem;
   }

   button.btn-delete {
      color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
   }

   button {
      display: inline-flex;
   }
`
