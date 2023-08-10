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
   }

   .price-span {
      color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
   }
`