import { useAuth } from "../../hooks/auth"

import { Container } from "./styles"

import PedidosIcon from "../../assets/menu/PedidosIcon.svg"

import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive"


export const ButtonImg = ({title, ...rest}) => {
   const navigate = useNavigate()
   const isMobile = useMediaQuery({ maxWidth: 1536})
   
   const { user } = useAuth()

   return (
      <Container {...rest}>
         {
            isMobile ?
               <button className="pedidos-button">
                  <img 
                     className="pedidos-icon" 
                     src={PedidosIcon} 
                     alt="ícone de pedidos" 
                  />

                  <div className="circle-number">
                     {/* numeroDePedido && <span className="badge">{numeroDePedidos}</span> */}
                     0
                  </div>
               </button>
            :
            <div className="pedidos-button">
               {user?.isAdmin ?
                  <button 
                     className="novo-prato"
                     onClick={() => navigate("/newDish")}
                  >
                     Novo prato
                  </button>
               :
                  <>
                     <img className="pedidos-icon" src={PedidosIcon} alt="ícone de pedidos" />
                     <button className="pedidos-number">
                        {title} ({/* numeroDePedido && <span className="badge">{numeroDePedidos}</span> */}
                        0)
                     </button>
                  </>
               }
            </div>
         }
      </Container>
   )
}