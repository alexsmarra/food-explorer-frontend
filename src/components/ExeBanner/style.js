import styled from "styled-components";

export const Container = styled.div`
grid-area: banner;
z-index: 0;
display: flex;
flex-direction: column;
align-items: center;

justify-content: center;

> .rectangle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "a b";
  height: 26rem;

  margin: 17.2rem 0 10rem 0;
  border-radius: 0.8rem;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  position: relative;

  div:nth-child(1) {
    grid-area: a;

    img {
      position: absolute;
      bottom: 0;
      left: -6rem;
    }
  }

  div:nth-child(2) {
    grid-area: b;
    display: flex;
    flex-direction: column;

    padding: 9rem 10rem 0 4rem;

    h1 {
      font-weight: 500;
      font-size: 4rem;
      line-height: 5.6rem;
    }

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
  }
}

@media (max-width: 820px) {
  padding: 1.6rem;
  > .rectangle {
    grid-template-columns: 1fr 3fr;
    margin-top: 4.4rem;
    height: 12rem;

    div:nth-child(1) {
      img {
        width: 19.1rem;
        height: 14.9rem;
        left: -3rem;
      }
    }

    div:nth-child(2) {
      padding: 0 3rem 0 6rem;
      justify-content: center;
      h1 {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 140%;
      }

      p {
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 480px) {
  padding-left: 3.6rem;
  > .rectangle {
    grid-template-columns: 1fr 2fr;
    margin-top: 4.4rem;
    height: 12rem;

    div:nth-child(1) {
      img {
        width: 19.1rem;
        height: 14.9rem;
        left: -3rem;
      }
    }

    div:nth-child(2) {
      padding: 0 0 0 2rem;
      h1 {
        font-weight: 600;
        font-size: clamp(1rem, 1rem + 1.5vw, 3rem);
        line-height: 140%;
      }

      p {
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
}
`;
