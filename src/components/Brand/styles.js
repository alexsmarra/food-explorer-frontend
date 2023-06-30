import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
gap: 1rem;
cursor: pointer;

width: 100%;
justify-content: center;

   img {
      width: 2.5rem;
      height: 2.5rem;
   }

   h1 {
      font-size: 2rem;
      font-family: 'Roboto', sans-serif;
   }

@media(min-width: 360px) {
gap: 1.5rem;

   img {
      width: 3.7rem;
      height: 3.7rem;
   }

   h1 {
      font-size: 2.5rem;
   }
}

@media(min-width: 540px) {
gap: 1.7rem;

   img {
      width: 3.8rem;
      height: 3.8rem;
   }

   h1 {
      font-size: 2.7rem;
   }
}

@media(min-width: 1024px) {
   img {
      width: 5rem;
      height: 5rem;
   }

   h1 {
      font-size: 3.5rem;
   }

   > div img {
         /* width: 6rem; */
         /* height: 6rem; */
      }
}
`