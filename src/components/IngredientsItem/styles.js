import styled from "styled-components"

export const Container = styled.div`
   display: flex;
   align-items: center;

   border: ${({ theme, isnew }) => isnew == 'true' ? `1px dashed ${theme.COLORS.PLACEHOLDER_INPUT_COLOR}` 
                                         : "none"};
   border-width: 2px; 

   background-color: ${({ theme, isnew }) => isnew == 'true' ? "transparent" 
                                                   : theme.COLORS.MEDIUM_GRAY};
   border-radius: 8px;
   padding: 0rem .7rem;

   input {
      // setando como padrão do html (pois no global tem propriedades alteradas)
      background-color: transparent;
      color: ${({ theme, isnew }) => isnew == 'true' ? theme.COLORS.PLACEHOLDER_INPUT_COLOR
                                                     : "white"};
      padding: 1px 0.5em;
      //

      width: 65px;
      height: 27px;
      font-size: 1rem;

      &::placeholder {
         color: ${({ theme, isnew }) => isnew == 'true' ? theme.COLORS.PLACEHOLDER_INPUT_COLOR
                                              : theme.COLORS.MAIN_COLOR};
         font-size: 1rem;
         opacity: .8;
      }
   }


   button.btn-add {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT_COLOR};
      font-size: 1rem;
   }

   button.btn-delete {
      color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
      font-size: 1rem;
   }

   button {
      display: inline-flex;
      align-items: center;
   }
`
