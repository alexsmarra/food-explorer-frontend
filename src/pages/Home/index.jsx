import { Container, Restante } from "./styles"

import HeaderAdmin from "../../components/HeaderAdmin"
import { Banner } from "../../components/Banner"

export function Home() {

   return (
      <Container>
         <HeaderAdmin />
         <Banner />
         <Restante />
      </Container>
   )
}