import styled from "styled-components"

export const Container = styled.header`

   button {
      background: none;
   }

   button.pedidos-button {
      position: relative;
      display: inline-block;
   }

   div.circleNumber {
         position: absolute;
         top: -10px;
         right: -10px;
         background-color: red;
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
`