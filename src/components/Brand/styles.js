import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
cursor: pointer;

width: 100%;
justify-content: center;

   .brand-wrapper {
   display: flex;
   gap: .8rem;


      >div {
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 1rem;

         >img {
            width: 2.5rem;
            height: 2.5rem;
         }

         >h1 {
            font-size: 2rem;
            font-family: 'Roboto', sans-serif;
         }
      }
      
      span {
         display: inline-flex;
         align-items: center;
         color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
         font-size: 10px;
      }
   }

@media(min-width: 360px) {
gap: 1.5rem;

   img {
      width: 3rem;
      height: 3rem;
   }

   h1 {
      font-size: 2rem;
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
}
`