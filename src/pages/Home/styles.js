import styled from "styled-components"

export const Container = styled.div`
   display: grid;

  height: 100vh;

  grid-template-rows: 60px auto 1fr;
  grid-template-areas:
    "header"
    "banner"
    "restante";

    > .banner {
      margin-top: 4.5rem;
    }
`

/* apenas para preencher por enquanto */
export const Restante = styled.div`
   grid-area: restante;
   background: grey;
   margin-top: 100px;
`