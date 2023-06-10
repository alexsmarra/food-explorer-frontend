import styled from 'styled-components'

export const Container = styled.div`
   display: grid;
   justify-content: center;
   height: 100vh;

   grid-template-rows: 130px 1fr;

   /* @media only screen and (min-width: 416px) {
   }

   @media only screen and (min-width: 768px) {
   } */
`

export const Head = styled.header`
   display: flex;
   align-items: end;

   /* @media only screen and (min-width: 768px) {
   } */
`
export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 5rem;
   margin-top: 5rem;

   button {
      height: 35px;
      margin-bottom: -2rem;
   }

   a {
      text-align: center;
   }
`