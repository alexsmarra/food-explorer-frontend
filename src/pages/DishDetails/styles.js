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
      margin: 0 2rem 3rem;
      justify-content:center;
      align-items: center;


      .wrapper-details-one {
         position: relative;
         padding-top: 3rem;

         .button-return {
            height: auto;
            position: absolute;
            left: -20px;

            img {
               width: 2rem;
               height: 2rem; 
            }
            span {
               font-size: 1.5rem;
            }
         }

         img.dish-image {
            width: 17rem;
            height: 17rem;
            margin-top: 35px;
         }
      }

      .wrapper-details-two {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
            
         p {
            text-align: center;
            color: ${({ theme }) => theme.COLORS.WHITE_GRAY};
         }

         p:nth-child(1) {
            font-size: 2.5rem;
            margin-top: 1rem;
            margin-bottom: 1.7rem;
            font-weight: 500;
         }

         p:nth-child(2) { 
            font-weight: 400;
            font-size: 1.4rem;
            margin-bottom: 1.2em;
         }

         .ingredients {
            display: flex;
            justify-content: center;
            max-width: 20rem;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 4rem;
         }

         .btn-edit-dish {
            width: 100%;
         }

         .wrapper-amount-and-price {
            display: flex;
            
            span.price {
               background: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
               cursor: pointer;
               .btn-img {
                  .circle-number {
                     display: none;
                     visibility: none;
                  }
               }

               display: inline-flex;
               color: white;
               font-size: 16px;
            }
         }   
      }        
   }
`