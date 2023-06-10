import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;

   gap: 1rem;


   /* @media only screen and (min-width: 768px) {
      gap: 1.5rem;
   } */

   img {
      width: 3.3rem;
      height: 3.3rem;


      /* @media only screen and (min-width: 768px) {
         width: 4.4rem;
         height: 4.4rem;
      } */
   }

   h1 {
      font-size: 2.5rem;
      font-family: 'Roboto', sans-serif;

      /* @media only screen and (min-width: 768px) {
         font-size: 3.3rem;
      } */
   }
`
