import styled from "styled-components"

export const Container = styled.header`
   grid-area: header;
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 4.6rem .5rem 2.4rem;
   background-color: ${({ theme }) => theme.COLORS.MAIN_DARK};

   button {
      background: none;
   }

   .menu-button > img {
      width: 2.1rem;
      height: 1.4rem;
   }

   .logo {
      margin-bottom: .5rem;
   }

   button.pedidos-button {
      position: relative;
      display: inline-block;

      img {
         width: 2.1rem;
         height: 2.1rem;
      }
   }

   div.circle-number {
      position: absolute;
      top: -6px;
      right: -6px;
      background-color: ${({ theme }) => theme.COLORS.TOMATO};
      border-radius: 50%;
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 12px;
      font-weight: bold;  
   }

@media(min-width: 360px) {
   justify-content: space-between;
   padding: 4.6rem 2rem 2.4rem;

   .logo {
      gap: 1rem;
   }
}

@media(min-width: 540px) {
   .logo img {
      width: 2.1rem;
      height: 2.1rem;
   }

   .logo h1 {
      font-size: 1.63rem;
   }
}

@media(min-width: 1024px) {

   justify-content: space-around;

   .input {
      width: clamp(200px, 40%, 600px);
   }

   button.pedidos-button {
      display: flex;
      background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR}; 
      padding: 16px 46px;
      gap: .8rem;
   }

   div.pedidos-number {
      font-weight: 500;
   }
}

@media(min-width: 1280px) {

   .input {

      svg {
         margin-left: 60px;
      }
   }
}
`