import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Importações de imagens
import MenuIcon from "../../assets/menu/Menu.svg"
import PedidosIcon from "../../assets/menu/PedidosIcon.svg"
// Importações de componentes externos
import { Logo } from "../Logo"
// Importações de componentes locais
import { Container } from "./styles"


const HeaderUser = () => {
   // for resize screen
   const [isMobile, setIsMobile] = useState(false)

   const navigate = useNavigate()

   function handleMenuClick() {
      navigate("/menu")
   }

   // for resize screen
   useEffect(() => {
      const handleResize = () => {
         const isMobileScreen = window.innerWidth <= 768 // Defina o limite de tamanho para considerar como "mobile"

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
      <Container>
         {isMobile ? (

         <>
            <button className="menu-button" onClick={handleMenuClick}>
               <img className="menu-icon" src={MenuIcon} />
            </button>

            <Logo />

            <button className="pedidos-button">
               <img className="pedidos-icon" src={PedidosIcon} alt="ícone de pedidos" />
               <div className="circleNumber">0</div>
            </button>
         </>

         ) : (

         <>
            <div>Desktop</div>
         </>

         )}
      </Container>
   )

}

export default HeaderUser

