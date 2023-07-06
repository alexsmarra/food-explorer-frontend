import { useAuth } from "../../hooks/auth"

import { Container } from "./styles"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import { HeaderUser } from "../../components/HeaderUser"
import { Banner } from "../../components/Banner"
import { Dishes } from "../../components/Dishes"
import { Footer} from "../../components/Footer"

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

         <Dishes />

         <Footer />
      </Container>
   )
}