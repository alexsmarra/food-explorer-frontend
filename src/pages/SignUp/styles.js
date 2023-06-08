import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;

   height: 100vh;

   padding: 0 2.7rem;

   @media only screen and (min-width: 416px) {
      padding: 0 5.7rem;
   }

   @media only screen and (min-width: 768px) {
      padding: 0 9.7rem;
   }

   button {
      margin-bottom: 3.2rem;
      padding: 12px 0;
   }

   a {
      text-align: center;
   }
`

export const Head = styled.header`
   margin-top: 11rem;
   margin-bottom: 7.3rem;

   @media only screen and (min-width: 768px) {
      margin-top: 15rem;
   }
`