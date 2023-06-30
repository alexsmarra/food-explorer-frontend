import { Container } from "./styles";

import FoodSalteandoMobile from "../../assets/banner/FoodSalteandoMobile.svg";
import FoodSalteandoDesktop from "../../assets/banner/FoodSalteandoDesktop.svg";

import { useMediaQuery } from "react-responsive"

export const Banner = () => {
   const isMobile = useMediaQuery({ maxWidth: 1023 })

   return (
      <Container className="banner">
         <div className="food-wrapper">
            {
               isMobile ?
                  <img className='food' src={FoodSalteandoMobile} alt="Imagem de aliamentos salteando, um banner" />
                  
               :
                  <img className='food' src={FoodSalteandoDesktop} alt="Imagem de aliamentos salteando, um banner" />
            }
         </div>

         <div className="position-text">.</div>
         
         <div className="text">
            <h1>Sabores Inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
         </div>
      </Container>
   );
};
