import styled from "styled-components";

export const Container = styled.div`
  grid-area: banner;

  .banner-wrapper {
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;
    height: 80px;
    /* grid-template-areas: "a b"; */
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    margin: 0rem 1.1rem 0 2.2rem;
    border-radius: 3px;
    
    >.img-wrapper img {
      position: absolute;
      width: 140px;
      height: 140px;
      object-fit: contain;
      bottom: -20.5px;
      left: -23px;
    }

    >.text {
        display: flex;
        flex-direction: column;
        gap: .3rem;
        max-width: 12rem;

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

@media(min-width: 540px) {
  .banner-wrapper {
      height: 120px;   
      margin: 0rem 1.8rem 0 3.6rem;

    >.img-wrapper img {
      width: 190px;
      height: 160px;
      object-fit: cover;
      bottom: -5.5px;
      left: -15px;
    }

    >.text {
      justify-content: center;
      max-width: 20rem;
    
      h1 {
        font-size: 1.4rem;
        margin-top: 0;
        margin-left: 0rem;
      } 

      p {
        font-size: .93rem;
        line-height: 1.4rem;
        margin-left: 0rem;
      }
    }
  }
}     
`