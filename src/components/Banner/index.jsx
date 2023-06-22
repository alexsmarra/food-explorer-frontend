import { Container } from "./styles";
import FoodSalteando from "../../assets/banner/FoodSalteando.svg";

export const Banner = () => {
   return (
      <Container>
         <div className="banner">
            <div className="img-wrapper">
               <img src={FoodSalteando} alt="Imagem de aliamentos salteando, um banner" />
            </div>

            <div className="text">
               <h1>Sabores Inigualáveis</h1>
               <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
         </div>
      </Container>
   );
};
