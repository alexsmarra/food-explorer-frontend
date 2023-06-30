import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
const HeaderUser = () => {
   // for resize screen
   const [isMobile, setIsMobile] = useState(false)

   const navigate = useNavigate()

   function handleMenuClick() {
      navigate("/menu")
   }

   // for resize screen (forma antiga, sem o uso do useMediaQuery do react-responsive, mas deixei para aprendizado)
   useEffect(() => {
      const handleResize = () => {
         const isMobileScreen = window.innerWidth <= 1023 // Defina o limite de tamanho para considerar como "mobile"

         // Atualiza o estado com base no tamanho da tela
         setIsMobile(isMobileScreen)   
      }

      // Adiciona um ouvinte para o evento de redimensionamento de tela
      window.addEventListener('resize', handleResize)

      // Chama o manipulador de redimensionamento inicialmente
      handleResize()

      /* Remove o ouvinte do evento de redimensionamento de tela ao desmontar o componente.
      É uma prática recomendada quando se trata de adicionar e remover event listeners no React.
      Esse trecho de código faz parte da função de limpeza retornada pelo useEffect. Ele é executado quando o componente é desmontado, ou seja, quando o componente é removido da árvore de renderização.
      Essa abordagem é útil quando você tem um componente que é montado e desmontado várias vezes, como em roteadores ou alternância de componentes. Garantir que os event listeners sejam removidos quando não são mais necessários ajuda a evitar vazamento de memória e comportamento indesejado. */
      return () => {
         window.addEventListener('resize', handleResize)
      }
   }, [])

   return (
      <Container className="header">
         {isMobile ? (

         <>
            <button className="menu-button" onClick={handleMenuClick}>
               <img className="menu-icon" src={MenuIcon} />
            </button>

            <Brand />

            <ButtonImg />
         </>
         // Desktop
         ) : (

         <>
            <Brand />

            <Input 
               icon={FiSearch} 
               placeholder="Busque por pratos ou ingredientes"
            />

            <ButtonImg title="Pedidos" />

            <button>
               <img className="logout" src={SignOut} alt="ícone de signout" />
            </button>

         </>

         )}
      </Container>
   )
}

export default HeaderUser


