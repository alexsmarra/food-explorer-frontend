import styled from "styled-components"

export const Container = styled.footer`
background-color: ${({ theme }) => theme.COLORS.MAIN_DARK};
grid-area: footer;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1.5rem;

   >div {
      display: flex;
      align-items: center;
      gap: .5rem;
      user-select: none;

      >img {
         width: 1.5rem;
         height: 1.5rem;
      }
      >span {
         color: ${({ theme }) => theme.COLORS.DARK_GRAY};
         font-size: .8rem;
      }
   }   

   >span {
      font-size: .8rem;
      user-select: none;
   }

@media(min-width: 360px) {
padding: 0 2rem;

   >div {
      gap: .75rem;

      >img {
         width: 1.8rem;
         height: 1.8rem;
      }
      >span {
         color: ${({ theme }) => theme.COLORS.DARK_GRAY};
         font-size: 1.1rem;
      }
   }   

   >span {
      font-size: .88rem;
   }
}

@media(min-width: 540px) {
padding: 0 2.4rem;

   >div {
      gap: .9rem;

      >img {
         width: 1.9rem;
         height: 1.9rem;
      }
      >span {
         color: ${({ theme }) => theme.COLORS.DARK_GRAY};
         font-size: 1.2rem;
      }
   }   

   >span {
      font-size: .95rem;
   }
}

@media(min-width: 768px) {
padding: 0 5rem;

   >div {
      gap: 1.3rem;

      >img {
         width: 2.3rem;
         height: 2.3rem;
      }
      >span {
         color: ${({ theme }) => theme.COLORS.DARK_GRAY};
         font-size: 1.7rem;
      }
   }   

   >span {
      font-size: 1.35rem;
   }
}

@media(min-width: 820px) {
   
   >div {
      gap: 1.5rem;

      img {
         width: 2.53rem;
         height: 2.53rem;
      }
      span {
         font-size: 1.72rem;
      }
   }   

   >span {
      font-size: 1.48rem;
   }  
}
`