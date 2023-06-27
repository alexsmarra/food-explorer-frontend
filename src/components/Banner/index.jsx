import { Container } from "./styles";
import FoodSalteando from "../../assets/banner/FoodSalteando.svg";

export const Banner = () => {
   return (
      <Container className="banner">
         <div className="food-wrapper">
            <img className='food' src={FoodSalteando} alt="Imagem de aliamentos salteando, um banner" />
         </div>

         <div className="position-text">.</div>
         
         <div className="text">
            <h1>Sabores Inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
         </div>
      </Container>
   );
};
