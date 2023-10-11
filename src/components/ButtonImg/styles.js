import styled from "styled-components"

export const Container = styled.div`
   
   button {
      background: none;
   }

   button.pedidos-button {
      position: relative;
      display: inline-block;
      align-items: center;
      
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
   
@media(min-width: 768px) {

   button.pedidos-button {
      >img {
         width: 2.8rem;
         height: 2.8rem;
      }

      >div.circle-number {
         position: absolute;
         top: -7px;
         right: -7px;
         background-color: ${({ theme }) => theme.COLORS.TOMATO};
         border-radius: 50%;
         width: 20.5px;
         height: 20.5px;
         display: flex;
         justify-content: center;
         align-items: center;
         color: white;
         font-size: 12px;
         font-weight: bold;  
      }
   }
}

@media(min-width: 1024px) {
   div.pedidos-button {
      display: flex;
      background-color: ${({ theme }) => theme.COLORS.BUTTON_COLOR}; 
      padding: 12px 40px;
      gap: 1rem;
      transition: .3s;
      border-radius: 5px;
   }

   div.pedidos-button:hover {
      filter: brightness(.85);
   }

   button.pedidos-number {
      font-weight: 500;
   }
}
`