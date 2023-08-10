import { useAuth } from "../../hooks/auth"

import { useNavigate } from "react-router-dom";

import { useMediaQuery } from "react-responsive"

// Importações de componentes locais
import { Container } from "./styles"

// Importações de imagens
import MenuIcon from "../../assets/menu/Menu.svg"
import SignOut from "../../assets/menu/SignOut.svg"
import { FiSearch } from "react-icons/fi"
// Importações de componentes externos
import { Brand } from "../Brand"
import { Input } from "../Input"
import { ButtonImg } from "../ButtonImg" 


/* outra forma de exportar, como default (ver abaixo no final o export), não é o meu preferido para
components */
const HeaderAdmin = ({ setSearch }) => {
   const navigate = useNavigate()
   // const com nome diferente da que esta em HeaderUser, pois estava interferindo na renderização
   const isMovable = useMediaQuery({ maxWidth: 1023 })

   const { signOut } = useAuth()

   function handleMenuClick() {
      navigate("/menu")
   }

   async function handleSignOut() {
      signOut()
   }

   return (
      <Container className="header-admin">
         {isMovable ? (

         <>
            <button className="menu-button" onClick={handleMenuClick}>
               <img className="menu-icon" src={MenuIcon} />
            </button>

            <Brand />
         </>
         // Desktop
         ) : (

         <>
            <Brand />

            <Input 
               icon={FiSearch} 
               placeholder="Busque por pratos ou ingredientes"
               onChange={e => setSearch(e.target.value)}
            />

            <ButtonImg />

            <button type="button" onClick={handleSignOut}>
               <img className="logout" src={SignOut} alt="ícone de signout" />
            </button>

         </>

         )}
      </Container>
   )
}

export { HeaderAdmin } 


