import { useAuth } from "../../hooks/auth"

import { Container } from "./styles"

import PedidosIcon from "../../assets/menu/PedidosIcon.svg"

import { useMediaQuery } from "react-responsive"


export const ButtonImg = ({title, ...rest}) => {
   const isMobile = useMediaQuery({ maxWidth: 1023})
   const { user } = useAuth()

   return (
      <Container type="button" {...rest}>
         {
            isMobile ?
               <button className="pedidos-button">
                  <img className="pedidos-icon" src={PedidosIcon} alt="ícone de pedidos" />
                  <div className="circle-number">
                     {/* numeroDePedido && <span className="badge">{numeroDePedidos}</span> */}
                     0
                  </div>
               </button>
            :
            <button className="pedidos-button">
                  {user?.isAdmin ?
                     <div className="novo-prato">
                        Novo prato
                     </div>
                  :
                     <>
                        <img className="pedidos-icon" src={PedidosIcon} alt="ícone de pedidos" />
                        <div className="pedidos-number">
                           {title} ({/* numeroDePedido && <span className="badge">{numeroDePedidos}</span> */}
                           0)
                        </div>
                     </>
                  }
               </button>

         }

      </Container>
   )
}