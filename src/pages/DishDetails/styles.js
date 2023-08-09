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

      .wrapper-details-one {
         .button-return {
            height: auto;

            img {
               width: 1.8rem;
               height: 1.8rem; 
            }
            span {
               font-size: 1.35rem;
            }
         }

            img {
               width: 10rem;
               height: 10rem;
            }
         }
      }

      .wrapper-details-two {
         h1 {
            color: white;
            font-size: 50px;
         }
      }
      
   
`