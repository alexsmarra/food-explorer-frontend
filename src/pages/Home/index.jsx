import { Container, Restante } from "./styles"

import HeaderUser from "../../components/HeaderUser"
import { Banner } from "../../components/Banner"

export function Home() {
   return(
      <Container>
         <HeaderUser />
         <Banner />
         <Restante />
      </Container>
   )
}