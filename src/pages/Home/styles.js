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
      gap: 1.2rem;
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

      .bs-pencil, .ai-outline-heart, .ai-fill-heart {
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
        width: 1.6rem;
        height: 1.6rem;
      }

      .ai-fill-heart {
        color: ${({ theme }) => theme.COLORS.BUTTON_FORM_COLOR};
      }

      img {
        margin-bottom: 1rem;
      }

      h3 {
        margin-bottom: 1rem;
      }
      
      .price-amount-and-incluir {
        span.price-span {
          margin-bottom: 1rem;
        }
        .amount {
          margin-bottom: 0rem;
        }
        .incluir-btn {
          width: 13rem;
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
grid-template-rows: 100px auto 1100px 55px;

  .banner {
    margin-top: 7rem;
  }

  .section {
    margin-left: 3.6rem;
    margin-top: 2rem;

    h2 {
      font-size: 1.6rem;
    }

    .cards {
      gap: 1.8rem;
    }
    .meal-wrapper {
      padding: 5rem 2rem;

      .bs-pencil, .ai-outline-heart, .ai-fill-heart {
        width: 2.5rem;
        height: 2.5rem;
        top: 1.5rem;
        right: 1.5rem;
      }
      
      .meal {
        width: 210px;

        img.dish-img {
          width: 10.5rem;
          height: 10.5rem;
        }

        h3 {
          font-size: 1.4rem;
        }

        .price-amount-and-incluir {
          span.price-span {
            font-size: 1.5rem;
          }
          .amount {
            img {
              width: 2.2rem;
              height: 2.2rem;
            }
            span {
              font-size: 1.4rem;
            }
          }
          .incluir-btn {
            width: 16rem;
            height: 30px;
            font-size: 1.4rem;
          }
        }
      }
    }
  }
}

@media(min-width: 820px) {
  grid-template-rows: 110px auto 1100px 58px;
}


@media(min-width: 1024px) {
  grid-template-rows: 110px auto 1150px 58px;

  .meals {
    .section {
      margin: 3rem 12rem;
      position: relative;
      height: auto;

      h2 {
        font-size: 2rem;
      }

      .meal {
        width: 175px;
      }
    }

    .arrows {
      div:nth-child(1) {
        position: absolute;
        top: 50%;
        transition: opacity 1s ease-in-out;
        cursor: pointer;
      }

      div:nth-child(2) {
        position: absolute;
        top: 50%;
        right: 0;
        cursor: pointer;
      }
      
      div {
        svg {
          width: 10rem;
          height: 10rem;
          opacity: 0.5;
        }
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
        width: 300px;
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

@media(min-width: 1536px) {
  grid-template-rows: 110px auto 1550px 58px;

  .meals {
    .section {
      h2 {
        font-size: 2.5rem;
      }
    }
    .meal-wrapper {
      padding: 0;

      .meal {
        width: 250px;

        img.dish-img {
          width: 150px;
          height: 150px;
          margin-top: 4rem;
        }

        div {
          margin-bottom: 2rem;

          h3.meal-name {
            font-size: 2rem;
          }
          
          p.description {
            font-size: 1.3rem;
            padding: 0 1rem;
          }
        }

        .price-amount-and-incluir {
          span.price-span {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
}
`