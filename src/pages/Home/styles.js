import styled from "styled-components"

export const Container = styled.div`
  display: grid;

  height: 100vh;

  grid-template-rows: 70px auto auto auto auto 40px;
  grid-template-areas:
  "header"
  "banner"
  "section"
  "section"
  "section"
  "footer";

  .banner {
    margin-top: 4.5rem;
  }  

  .section .meal-wrapper svg {
    cursor: pointer;
  }

@media(min-width: 360px) {
  .banner {
    margin-top: 6.5rem;
  }
} 

@media(min-width: 768px) {
grid-template-rows: 100px auto 1fr 55px;

  .banner {
    margin-top: 7rem;
  }
}

@media(min-width: 820px) {
grid-template-rows: 110px auto 1fr 58px;
}


@media(min-width: 1024px) {

  .footer {
    justify-content: space-between;
    padding: 0 6rem;
  }
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

  .footer {
    padding: 0 11.8rem;
  }
}
`
