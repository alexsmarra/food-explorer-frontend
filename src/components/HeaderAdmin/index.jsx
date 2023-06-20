// import { Container } from "./styles"

// export function HeaderAdmin() {
//    return (
//       <Container>
         
//       </Container>
//    )
// }

import React, { useEffect, useState } from 'react';

const HeaderUserExemplo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Verifica o tamanho da tela
      const isMobileScreen = window.innerWidth <= 768; // Defina o limite de tamanho para considerar como "mobile"

      // Atualiza o estado com base no tamanho da tela
      setIsMobile(isMobileScreen);
    };

    // Adiciona um ouvinte para o evento de redimensionamento de tela
    window.addEventListener('resize', handleResize);

    // Chama o manipulador de redimensionamento inicialmente
    handleResize();

    // Remove o ouvinte do evento de redimensionamento de tela ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header-user">
      {isMobile ? (
        // Elementos específicos para a versão mobile
        <>
          <button className="menu-button">Menu</button>
          <img className="logo" src="logo-mobile.png" alt="Logo" />
          <span className="cart-icon">Carrinho</span>
        </>
      ) : (
        // Elementos específicos para a versão desktop
        <>
          <img className="logo" src="logo-desktop.png" alt="Logo" />
          <input type="text" placeholder="Buscar pratos" />
          <button className="cart-button">Carrinho</button>
          <span className="logout-icon">Logout</span>
        </>
      )}
    </div>
  );
};

export default HeaderUserExemplo;