import styled from "styled-components"

export const Container = styled.div`
display: grid;
grid-template-areas: 
"head"
"headTwo"
"section"
"footer";
height: 100vh;
grid-template-rows: 60px 200px auto 40px;

.meals {
   overflow-x: scroll;
}

.section {
   margin: 1rem;

   span.empty-dishes {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE_GRAY};
      opacity: .6;
   }
}
.cards {
   display: flex;
   gap: 1.2rem;
   margin: 12px 0 24px 0;
}

@media(min-width: 768px) {
grid-template-rows: 110px 1fr 55px;
}

@media(min-width: 820px) {
grid-template-rows: 110px 1fr 58px;
}
`

export const Head = styled.header`
grid-area: head;
display: flex;
align-items: center;
gap: 1.5rem;
padding: 4.6rem 1.5rem 2.4rem;
background-color: ${({ theme }) => theme.COLORS.MAIN_DARK};

   button {
      display: flex;
   }

   >button img {
      width: 1.5rem;
      height: 1.5rem;
   }
   >span {
      font-size: 1.8rem;
   }

@media(min-width: 360px) {
padding-left: 2rem;
padding-right: 2rem;
}

@media(min-width: 540px) {
padding-left: 3rem;
padding-right: 3rem;
}

@media(min-width: 768px) {
padding-left: 5rem;
padding-right: 5rem;
gap: 2rem;

   >button img {
      width: 1.8rem;
      height: 1.8rem;
   }
   >span {
      font-size: 2.1rem;
   }
}

@media(min-width: 820px) {
gap: 2.2rem;

   >button img {
      width: 1.9rem;
      height: 1.9rem;
   }
   >span {
      font-size: 2.2rem;
   }
}
`

export const HeadTwo = styled.header`
grid-area: headTwo;
display: flex;
flex-direction: column;
padding: 1.2rem;
margin-top: 2.5rem;
gap: 2rem;

   >.input-div {
   margin-bottom: 2rem;

      svg {
         width: 2rem;
         height: 2rem;
      }

      input {
         &::placeholder {
            font-size: 1.11rem;
         }
      }
   }

   >div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: .5rem;

      button {
         color: ${({ theme }) => theme.COLORS.WHITE_GRAY};
         text-align: left;
      }

      hr {
         border-color: ${({ theme }) => theme.COLORS.DARK_GRAY_BLUE};
         height: -1px;
         opacity: 0.2;
      }
   }

@media(min-width: 360px) {
padding-left: 1.8rem;
padding-right: 1.8rem;

   >.input-div {
      input {
         &::placeholder {
            font-size: 1.3rem;
         }
      }
   }
}

@media(min-width: 390px) {
margin-top: 3.5rem;
}

@media(min-width: 540px) {
margin-top: 4rem;
padding-left: 2.4rem;
padding-right: 2.4rem;
}

@media(min-width: 768px) {
padding-left: 5rem;
padding-right: 5rem; 

   >.input-div {
      margin-bottom: 3rem;

      input {
         height: 55px;


         &::placeholder {
            font-size: 1.6rem;
         }
      }
   }

   >div:nth-child(2) {
      gap: 1.6rem;

      button {
         font-size: 2.5rem;
      }
   }
}

@media(min-width: 820px) {
margin-top: 6rem;

   >.input-div {
      margin-bottom: 4rem;

      .input {
         gap: .5rem;
      }

      svg {
            width: 28px;
            height: 28px;
         }

      input {
         height: 65px;

         &::placeholder {
            font-size: 2rem;
         }
      }
   }

   >div:nth-child(2) {
      gap: 2rem;

      button {
         font-size: 2.5rem;
      }
   }
}
`