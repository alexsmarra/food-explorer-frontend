import styled from "styled-components"

export const Container = styled.div`
  display: grid;

  height: 100vh;

  grid-template-rows: 70px auto auto 40px;
  grid-template-areas:
  "header"
  "banner"
  "meals"
  "footer";

  .banner {
    margin-top: 4.5rem;
    margin-bottom: 3rem;  
  } 
  
  .meals {
    grid-area: meals;
    overflow: scroll;
  }

  .meals::-webkit-scrollbar {
    display: none;
}

  .section {
    margin: 0 0 0 1.6rem;

    .cards {
      display: flex;
      gap: 1.2rem;
      margin: 24px 0;
      width: 500px;
    }
    .meal-wrapper {
      position: relative;
      padding: 3rem 0;
      border-radius: 8px;
      background: ${({ theme }) => theme.COLORS.CARD};

      .bs-pencil, .ai-outline-heart {
        position: absolute;
        top: 8px;
        right: 8px;
      }
    }
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

  .meals {
    /* overflow: hidden; */
  }

  .footer {
    padding: 0 11.8rem;
  }
}
`
