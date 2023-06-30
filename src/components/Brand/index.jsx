import { useAuth } from "../../hooks/auth"

import { Container } from './styles'

import Polygon from "../../assets/menu/Polygon.svg"

export const Brand = () => {
   const { user } = useAuth()

   return (
      <Container className="brand">
         {/* mesmo que: user && user.isAdmin ? (user se tiver ou se tiver user (user?), vê a condição.. (user.isAdmin ?)) */}
         {user?.isAdmin ? 
            <>
               <img src={Polygon} alt="logo do restaurante, um polígono azul" />
               <h1>food explorer</h1>
               <span>admin</span>
            </>
         :
            <>
               <img src={Polygon} alt="logo do restaurante, um polígono azul" />
               <h1>food explorer</h1>
            </>
         }
      </Container>
   )
}