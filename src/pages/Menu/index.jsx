import { useAuth } from "../../hooks/auth"

import { Container, Head, Section } from "./styles.js"

import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer"

import Close from "../../assets/menu/Close.svg"
import { FiSearch } from "react-icons/fi"

import { useNavigate } from "react-router-dom"

export const Menu = () => {
   const { user, signOut } = useAuth()
   const navigate = useNavigate()

   function handleCloseButton() {
      navigate(-1)
   }

   async function handleSignOut() {
      signOut()
      navigate(-1)
   }

   return (
      <Container>
         <Head>
            <button onClick={handleCloseButton}>
               <img src={Close} alt="Close icon button" />
            </button>

            <span>Menu</span>
         </Head>

         <Section>
            <div className="input-div">
               <Input 
                  icon={FiSearch}
                  placeholder="Busque por pratos ou ingredientes"
               />
            </div>

            <div>
               {user.isAdmin == 1 &&
                  <>
                     <button>Novo Prato</button>
                     <hr className="hr" />
                  </>
               }

                  <>
                     <button onClick={handleSignOut}>Sair</button>
                     <hr />
                  </>
            </div>
         </Section>


         <Footer />
      </Container>
   )
}