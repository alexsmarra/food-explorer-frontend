import styled from "styled-components"

export const Container = styled.header`
   grid-area: header;
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 4.6rem 1.2rem 2.4rem;
   background-color: ${({ theme }) => theme.COLORS.MAIN_DARK};

   button {
      background: none;
   }

   .menu-button > img {
      width: 2.1rem;
      height: 1.4rem;
   }

   .brand {
      margin-bottom: .5rem;
   }



@media(min-width: 360px) {
   justify-content: space-between;
   padding: 4.6rem 2rem 2.4rem;
}

@media(min-width: 540px) {
   padding: 4.6rem 4rem 2.4rem;
}

@media(min-width: 768px) {
   .menu-button > img {
      width: 2.8rem;
      height: 1.85rem;
   }
}

@media(min-width: 1024px) {
   padding: 2.4rem 6rem 2.4rem;

   .input {
      width: clamp(200px, 40%, 600px);
   }
}

@media(min-width: 1280px) {
   .input {
      svg {
         margin-left: 60px;
      }
   }
}

@media(min-width: 1400px) {
   padding: 4.6rem 11.8rem 4.6rem;
}

@media(min-width: 1536px) {
   .pedidos-button {
      border-radius: 5px;
      cursor: pointer;
      filter: brightness(.9);
   }
}

`