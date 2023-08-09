import styled from "styled-components"

export const Container = styled.div`
grid-area: buttonReturn;
display: flex;
flex-direction: column;
gap: 1.2rem;
height: 80px;

   button {
      display: flex;
      align-items: center;

      img {
         margin-right: -2px;
         width: 1.8rem;
         height: 1.8rem;
      }

      span {
         /* -25% do img */
         font-size: 1.35rem;
      }
   }

   h2 {
      font-size: 2.4rem;
      font-weight: 500;
   }
`