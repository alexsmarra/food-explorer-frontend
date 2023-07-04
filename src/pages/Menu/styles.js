import styled from "styled-components"

export const Container = styled.div`
display: grid;
grid-template-areas: 
"head"
"section"
"footer";
height: 100vh;
grid-template-rows: 60px 1fr 50px;
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
      width: 1.6rem;
      height: 1.6rem;
   }
   >span {
      font-size: 1.8rem;
   }
`

export const Section = styled.section`
grid-area: section;
display: flex;
flex-direction: column;
padding: 1.2rem;
margin-top: 1.6rem;
gap: 2rem;

   >.input-div {
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
      gap: 1rem;

      button {
         text-align: left;
      }
   }
`