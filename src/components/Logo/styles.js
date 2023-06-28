import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   gap: .8rem;
   cursor: pointer;

   img {
      width: 2rem;
      height: 2rem;
   }

   h1 {
      font-size: 1.4rem;
      font-family: 'Roboto', sans-serif;
   }

@media(min-width: 360px) {
   img {
      width: 2.3rem;
      height: 2.3rem;
   }

   h1 {
      font-size: 1.6rem;
   }
}

@media(min-width: 540px) {
   gap: 1.2rem;

   img {
      width: 2.7rem;
      height: 2.7rem;
   }

   h1 {
      font-size: 2rem;
   }
}

@media(min-width: 1024px) {
   img {
      width: 2.9rem;
      height: 2.9rem;
   }

   h1 {
      font-size: 2.3rem;
   }
}
`
