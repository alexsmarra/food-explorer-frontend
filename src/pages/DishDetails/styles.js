import styled from "styled-components"

export const Container = styled.div`
   display: grid;
   height: 100vh;
   grid-template-rows: 70px auto 40px;

   grid-template-areas:
   "header"
   "content"
   "footer";

@media(min-width: 768px) {
   grid-template-rows: 100px auto 55px;
}   
`

export const Content = styled.div`
   grid-area: content;

   main {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      /* padding: 0 1rem; */
      justify-content:center;
      align-items: center;

      .wrapper-details-one {
         position: relative;
         padding-top: 3rem;

         .button-return {
            height: auto;
            position: absolute;
            left: 0px;

            img {
               width: 2.5rem;
               height: 2.5rem; 
            }
            span {
               font-size: 2rem;
            }
         }

         img.dish-image {
            width: 20rem;
            height: 20rem;
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
            /* max-width: 20rem; */
            flex-wrap: wrap;
            gap: 2rem;
            margin-bottom: 4rem;
         }

         .btn-edit-dish {
            width: 100%;
         }

         .wrapper-amount-and-price {
            display: flex;
            width: 100%;
            gap: 2rem;
            padding: 0 1rem;
            
            div.amount {
               width: 100%;
               display: flex;
               flex: 1;
               align-items: center;
               justify-content: center;
               text-align: center;
               gap: 1.5rem;
               /* background: orange; */

               .minus {
                  font-size: 4rem;
               }

               span{
                  font-size: 2rem;
               }

               .plus {
                  font-size: 4rem;
               }
            }
            
            span.price {
               background: ${({ theme }) => theme.COLORS.BUTTON_COLOR};
               cursor: pointer;
               display: flex;
               flex: 1;
               align-items: center;
               justify-content: center;
               gap: .6rem;
               font-size: 1.2rem;
               /* width: 200px; */
               padding: 8px;

               .btn-img {
                  img {
                     width: 2rem;
                     height: 2rem;
                     margin-top: .5rem;
                  }
                  .circle-number {
                     display: none;
                     visibility: none;
                  }
               }
            }
         }   
      }        
   }

@media(min-width: 360px) {
   main {
      margin: 0 3rem;

      .wrapper-details-one {
         .button-return {
            left: -40px;
         }
      }

      .wrapper-amount-and-price {
         padding: 0;
      }
   }
}

@media(min-width: 540px) {
   main {
      margin: 0 10rem;
   }
}

@media(min-width: 768px) {
   main {
      margin-top: 4rem;

      .wrapper-details-one {
         position: relative;
         padding-top: 3rem;

         /* .button-return {
            height: auto;
            position: absolute;
            left: 0px;

            img {
               width: 2.5rem;
               height: 2.5rem; 
            }
            span {
               font-size: 2rem;
            }
         } */

         img.dish-image {
            width: 27rem;
            height: 27rem;
            margin-top: 35px;
         }
      }
   }
}
`