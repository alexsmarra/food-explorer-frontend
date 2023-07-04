import { useAuth } from "../../hooks/auth"

import { Container, Restante } from "./styles"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import { HeaderUser } from "../../components/HeaderUser"
import { Banner } from "../../components/Banner"

export function Home() {
   const { user } = useAuth()

   return (
      <Container>
         {user.isAdmin ?
            <HeaderAdmin />
         :
            <HeaderUser />
         }
         <Banner />
         <Restante />
      </Container>
   )
}