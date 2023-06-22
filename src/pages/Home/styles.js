import styled from "styled-components"

export const Container = styled.div`
   display: grid;

   height: 100vh;

  grid-template-rows: 137px auto 1fr;
  grid-template-areas:
    "header"
    "banner"
    "restante";

   @media (max-width: 820px) {
    grid-template-rows: 114px auto 1fr;
  }
`

/* apenas para preencher por enquanto */
export const Restante = styled.div`
   grid-area: restante;
   background: grey;
   margin-top: 100px;
`