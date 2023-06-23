import { Container } from "./styles";
import FoodSalteando from "../../assets/banner/FoodSalteando.svg";

export const Banner = () => {
   return (
      <Container>
         <div className="rectangle">
          <div>
            <img src={FoodSalteando} alt="" />
          </div>

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
      </Container>
   );
};
