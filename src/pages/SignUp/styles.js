import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;

   height: 100vh;
   
   padding: 0 2rem;
   
   @media (min-width: 360px) {
      padding: 0 5rem;
   }
   @media (min-width: 540px) {
      padding: 0 8rem;
   }
   @media (min-width: 768px) {
      padding: 0 18rem;

      > header div {
         gap: 2rem;
      }
   }
   @media (min-width: 1024px) {
      padding: 0 26rem;
   }
   @media (min-width: 1280px) {
      padding: 0 30rem;
   }
   @media (min-width: 1400px) {
      flex-direction: row;
      gap: 10rem;
   }
`

export const Head = styled.header`
display: flex;
margin-top: 10rem;

   @media(min-width: 390px) {
      margin-top: 15rem;
   }
   @media (min-width: 540px) {
      margin-top: 11rem;
   }
   @media (min-width: 768px) {
      margin-top: 18rem;
   }
   @media (min-width: 912px) {
      margin-top: 22rem;
   }
   @media (min-width: 1024px) {
      margin-top: 4rem;

      > div {
         width: 100%;
         justify-content: center;
      }
   }
   @media(min-width: 1280px) {
      margin-top: 8rem;
   }
   @media (min-width: 1400px) {
      flex: 1;
      margin-bottom: 26rem;
   }
`

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 5rem;
   margin-top: 5rem;

   span {
      display: none;
      visibility: hidden;
   }

   button {
      height: 35px;
      margin-bottom: -2rem;
   }

   a {
      text-align: center;
   }

   @media(min-width: 390px) {
      margin-top: 7rem;
      gap: 6rem;

      > div input {
         height: 45px;
         font-size: 1.6rem;
      }

      > button {
         height: 45px;
         font-size: 1.6rem;
      }

      a {
         font-size: 1.6rem;
      }
   }
   @media(min-width: 768px) {
      margin-top: 8rem;
      gap: 8.5rem;

      > div label {
         font-size: 1.8rem;
      }

      > div input {
         height: 55px;
         font-size: 2rem;
      }

      > button {
         height: 55px;
         font-size: 2rem;
      }

      a {
         font-size: 2rem;
      }
   }
   @media(min-width: 912px) {
      margin-top: 10rem;
      gap: 13rem;

      > div {
         gap: 2rem;
      }

      > div label {
         font-size: 2.4rem;
      }

      > div input {
         height: 70px;
         font-size: 2.5rem;
      }

      > button {
         height: 70px;
         font-size: 2.5rem;
      }

      a {
         font-size: 2.5rem;
      }
   }
   @media(min-width: 1024px) {
      margin-top: 3rem;
      gap: 11rem;

      > div {
         gap: 1rem;
      }

      > div label {
         font-size: 2rem;
      }

      > button {
         font-size: 2.2rem;
      }

      a {
         font-size: 2.2rem;
         margin-top: -6rem;
         margin-bottom: 4rem;
      }
   }
   @media(min-width: 1280px) {
      margin-top: 6rem;
   }
   @media (min-width: 1400px) {
      flex: 1;
      justify-content: center;
      background: ${({ theme }) => theme.COLORS.DARK_BLUE};
      margin-top: 0;
      margin: 8rem 0;
      padding: 0 8rem;
      border-radius: 1.6rem;

      span {
         display: block;
         visibility: visible;

         font-family: 'Poppins', sans-serif;
         font-weight: 500;
         font-size: 3.2rem;

         text-align: center;
      }

      div label {
         margin-top: -5rem;
      }

      div input {
         font-size: 2rem;
      }

      button {
         margin-top: -5rem;
         font-size: 2rem;
      }

      a {
         font-size: 2rem;
      }
   }
`