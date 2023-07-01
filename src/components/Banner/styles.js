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
      /* font-size: clamp(1.19rem, 3vw, 4rem); */
      font-size: 1.19rem;
      margin-top: .8rem;
      margin-left: 12px;
    }

    p {
      /* font-size: clamp(.8rem, 2vw, 1.6rem); */
      font-size: .8rem;
      margin-left: 12px;
      line-height: 1.1rem;
      /* padding: 0 10px 0 0; */
    }
  }

@media(min-width: 305px) {
  .text {
    h1 {
      margin-left: 0px;
    }
    p{
      margin-left: 0px;
    }
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
      margin-top: 1.2rem;
    }

    p {
      /* padding: 0 20px 0 0; */
    }
  }
}

@media(min-width: 380px) {
  .text {
    h1 {
      width: 182px; 
    }
    p { 
      width: 182px; 
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
    h1 {
      margin-top: 1.8rem;
    }
    p {
      /* padding: 0 60px 0 0; */
    }
  } 
}

@media(min-width: 540px) {
margin: 0 3.6rem; 

>.text {
  gap: .8rem;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }
}  

@media(min-width: 768px) {
height: 150px;

  .food-wrapper img {
    width: 25rem;
    height: 20rem;
    top: -37.5px;
    left: -20px;
  }

  .text {
    gap: 1.1rem;

    h1 {
      width: 100%;
      font-size: 2.3rem;
      margin-top: 0;
    }
    p {
      width: 230px;
      line-height: 1.5rem;
      font-size: 1.1rem;
    }
  }
} 

@media(min-width: 1024px) {
margin: 0 12rem 0 12rem;
height: 200px;

.food-wrapper img {
    width: 38rem;
    height: 28rem;
    top: -60.5px;
    left: -44px;
  }

  .text {
    gap: 1.5rem;

    h1 {
      font-size: 3rem;
    }
    p {
      width: 350px;
      line-height: 1.7rem;
      font-size: 1.3rem;
    }
  }
}

@media(min-width: 1280px) {
height: 230px;

  .food-wrapper img {
    width: 49rem;
    height: 29rem;
  }

  .text {
    gap: 1.9rem;

    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.45rem; 
      line-height: 2rem;
    }
  }
}

@media(min-width: 1400px) {
  height: 260px;
  padding: 0 15rem 0 15rem;

  .food-wrapper img {
    width: 62rem;
    height: 38rem;
    top: -120px;
    left: -70px;
  }

  .text {
    gap: 2.6rem;
    
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.45rem; 
      width: 100%;
    }
  }
}
`

