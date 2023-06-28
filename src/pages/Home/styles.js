import styled from "styled-components"

export const Container = styled.div`
  display: grid;

  height: 100vh;

  grid-template-rows: 60px auto 1fr;
  grid-template-areas:
    "header"
    "banner"
    "restante";

  .banner {
    margin-top: 4.5rem;
  }  

@media(min-width: 360px) {
  .banner {
    margin-top: 6.5rem;
  }
} 

@media(min-width: 768px) {
  .banner {
    margin-top: 7rem;
  }
}

@media(min-width: 1024px) {
  grid-template-rows: 110px auto 1fr;

}

@media(min-width: 1280px) {
  .banner {
    margin-top: 10rem;
  }
}

@media(min-width: 1400px) {
  .banner {
    margin-top: 16rem;
  }
}


`

/* apenas para preencher por enquanto */
export const Restante = styled.div`
   grid-area: restante;
   background: grey;
   margin-top: 100px;
`