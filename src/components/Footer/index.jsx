import { Container } from "./styles"

import PolygonFooter from "../../assets/footer/Polygon-footer.svg"

export const Footer = () => {
   return (
      <Container className="footer">
         <div>
            <img src={PolygonFooter} alt="Polygon img logo" />
            <span>food explorer</span>
         </div>

         <span>© 2023 - Todos os direitos reservados.</span>
      </Container>
   )
}