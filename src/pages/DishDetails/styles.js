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
      justify-content:center;
      align-items: center;
      background: grey;

      .wrapper-details-one {
         position: relative;

            .button-return {
               height: auto;
               position: absolute;
               left: -50px;

               img {
                  width: 1.8rem;
                  height: 1.8rem; 
               }
               span {
                  font-size: 1.35rem;
               }
            }

            img.dish-image {
               width: 12rem;
               height: 12rem;
               margin-top: 30px;
            }
         }
      }

      .wrapper-details-two {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
            
         p {
            text-align: center;
         }

         p:nth-child(1) {
            font-size: 25px;
            font-weight: bold;
         }

         h1 {
            color: white;
            font-size: 50px;
         }

         .ingredients {
            display: flex;
            gap:1rem;
         }
      }
      
   
`