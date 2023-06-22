import styled from "styled-components";

export const Container = styled.div`
  grid-area: banner;

  .banner {
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;
    height: 80px;
    /* grid-template-areas: "a b"; */
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    margin: 3.5rem .6rem 0 1.8rem;
    border-radius: 3px;

    /* .img-wrapper {
      grid-area: a;
    }

    .text {
      grid-area: b;
    } */
    
    > .img-wrapper img {
      position: absolute;
      width: 140px;
      height: 140px;
      object-fit: contain;
      bottom: -20.5px;
      left: -23px;
    }

    > .text {
      display: flex;
      flex-direction: column;
      gap: .3rem;

      h1 {
        font-size: 1.2rem;
        margin-top: 2rem;
        margin-left: -2rem;
      }

      p {
        font-size: .8rem;
        margin-left: -2rem;
        line-height: 1.1rem;
      }
    }
    
  }

`
