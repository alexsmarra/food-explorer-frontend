import { useAuth } from "../../hooks/auth"

import { Container, Restante } from "./styles"

import HeaderUser from "../../components/HeaderUser"
import { Banner } from "../../components/Banner"

export function Home() {
   const { user } = useAuth()
   console.log(user)

   return (
      <Container>
         <HeaderUser />
         <Banner />
         {user.name}
         <Restante />
      </Container>
   )
}