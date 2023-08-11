import styled from "styled-components"

export const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
gap: 1rem;
width: 150px;

   img {
      width: 6.6rem;
      height: 6.6rem;
      border-radius: 50%;
      object-fit: cover;
   } 

   h3 {
      cursor: pointer;
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE_GRAY};
      font-weight: 500;
   }

   .price-amount-and-incluir {
      .price-span {
         display: inline-flex;
         color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
         font-size: 1.3rem;
      }
      .amount {
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 1.5rem;

         span {
            font-size: 1.2rem;
            margin-bottom: 5px;
         }
         img {
            width: 1.7rem;
            height: 1.7rem;
         }
      }
   }
  
`