import styled from "styled-components"

export const Container = styled.header`

   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 5.6rem 1rem 2.4rem;
   background-color: ${({ theme }) => theme.COLORS.MAIN_DARK};

   button {
      background: none;
   }

   .logo {
      margin-bottom: .5rem;
      gap: .3rem;
   }

   button.pedidos-button {
      position: relative;
      display: inline-block;
   }

   div.circle-number {
      position: absolute;
      top: -10px;
      right: -6px;
      background-color: ${({ theme }) => theme.COLORS.TOMATO};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 12px;
      font-weight: bold;  
   }

   @media(min-width: 360px) {
      padding: 5.6rem 2.8rem 2.4rem;

      .logo {
         gap: 1rem;
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