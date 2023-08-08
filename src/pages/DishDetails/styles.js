import styled from "styled-components"

export const Container = styled.div`
   display: grid;
   height: 100vh;
   grid-template-rows: 70px auto 40px;

   grid-template-areas:
   "header"
   "content"
   "footer";
`

export const Content = styled.div`
   grid-area: content;

   main {
      display: flex;
      flex-direction: column;
      margin: 0 2rem;

      .button-return {
         img {
            width: 1.8rem;
            height: 1.8rem;
         }
      }

      img {
         width: 66px;
         height: 66px;
      }
      
      h1 {
         color: white;
         font-size: 50px;
      }
   }
`