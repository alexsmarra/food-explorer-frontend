import styled from "styled-components"

export const Container = styled.div`
  display: grid;

  height: 100vh;

  grid-template-rows: 70px auto 700px 40px;
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
    overflow-x: scroll;
  }

  .meals::-webkit-scrollbar {
    display: none;
}

  .section {
    margin: 0 0 0 1rem;

    .cards {
      display: flex;
      /* gap: 1.2rem; */
      margin: 12px 0 24px 0;
      overflow-x: scroll;
    }
    .cards::-webkit-scrollbar {
      display: none;
    }

    .meal-wrapper {
      position: relative;
      padding: 2rem 0;
      border-radius: 8px;
      background: ${({ theme }) => theme.COLORS.CARD};

      .bs-pencil, .ai-outline-heart {
        position: absolute;
        top: 8px;
        right: 8px;
        cursor: pointer;
      }

      img {
        margin-bottom: 1rem;
      }

      h3 {
        margin-bottom: .5rem;
      }
      
      .price-amount-and-incluir {
        span.price-span {
          margin-bottom: 1rem;
        }
        .amount {
          margin-bottom: 0rem;
        }
        .incluir-btn {
          width: 11rem;
          height: 25px;
          font-size: 1.2rem;
        }
      }
    }
  }

@media(min-width: 360px) {
  .banner {
    margin-top: 6.5rem;
  }

  .section {
    margin: 0 0 0 2rem;
  }
} 

@media(min-width: 540px) {
  .section {
    margin-top: 1rem;
  }
}

@media(min-width: 768px) {
grid-template-rows: 100px auto 900px 55px;

  .banner {
    margin-top: 7rem;
  }

  .section {
    margin-left: 3.6rem;
    margin-top: 2rem;

    h2 {
      font-size: 1.4rem;
    }

    .cards {
      gap: 1.8rem;
    }
    .meal-wrapper {
      padding: 5rem 2rem;

      .bs-pencil, .ai-outline-heart {
        width: 2rem;
        height: 2rem;
        top: 13px;
        right: 13px;
      }
      
      .meal {
        img.dish-img {
          width: 10.5rem;
          height: 10.5rem;
        }

        h3 {
          font-size: 1.2rem;
        }
      }
    }
  }
}

@media(min-width: 820px) {
  grid-template-rows: 110px auto 950px 58px;
}


@media(min-width: 1024px) {
  .meals {
    .section {
      margin: 3rem 12rem;

      h2 {
        font-size: 2rem;
      }
      
      .meal {
        width: 175px;
      }
    }
  }

  .footer {
    justify-content: space-between;
    padding: 0 6rem;
  }
}

@media(min-width: 1280px) {
  .banner {
    margin-top: 10rem;
  }

  .meals {
    .section {
      /* margin: 0 12rem; */
      
      .meal {
        width: 400px;
      }
    }
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
