import styled from "styled-components";

export const Container = styled.div`
grid-area: banner;
position: relative;
display: flex;
justify-content: space-around;
margin: 0 .8rem 0 1.6rem;
background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
height: 100px;

  .food-wrapper img {
    width: 16.5rem;
    height: 13.5rem;
    position: absolute;
    object-fit: contain;
    top: -26px;
    left: -20px;
    // para arrumar um bug, risco acima da imagem para o dispositivo Nest Hub
    border: 1px solid transparent;
  }

  .position-text {
    flex: 1;
    visibility: hidden;
  }

  >.text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: .6rem;
      line-height: 1.5rem;

    h1 {
      font-size: clamp(1.19rem, 3vw, 4rem);
      margin-top: .8rem;
      margin-left: 3px;
    }

    p {
      font-size: clamp(.7rem, 1.8vw, 1.6rem);
      margin-left: 3px;
      line-height: 1.1rem;
      padding: 0 10px 0 0;
    }
  }

@media(min-width: 360px) {
margin: 0 1.5rem 0 3rem;
  
  .food-wrapper img {
    width: 20.65rem;
    height: 14.85rem;
    top: -40px;
    left: -40px;
  }

  .text {
    flex: 1.2;

    h1 {
      margin-left: 0px;
      margin-top: 1.2rem;
    }

    p {
      margin-left: 0px;
      padding: 0 13px 0 0;
    }
  }
}

@media(min-width: 412px) {
height: 120px;
margin: 0 1.8rem 0 3.6rem;

  .food-wrapper img {
    width: 19.9rem;
    height: 16.2rem;
    top: -30.5px;
    left: -25px;
  }

  .text {   
    p {
      padding: 0 45px 0 0;
    }

    h1 {
      margin-top: 1.8rem;
    }
  } 
}

@media(min-width: 540px) {
margin: 0 3.6rem; 
}  

@media(min-width: 768px) {
  
} 




@media(min-width: 1024px) {
}
`