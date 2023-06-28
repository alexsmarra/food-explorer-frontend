import { Container } from "./styles"

import PedidosIcon from "../../assets/menu/PedidosIcon.svg"

import { useMediaQuery } from "react-responsive"


export const ButtonTest = ({icon: Icon, ...rest}) => {
   const isMobile = useMediaQuery({ maxWidth: 1023})

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
                  <img className="pedidos-icon" src={PedidosIcon} alt="ícone de pedidos" />
                  <div className="pedidos-number">
                     Pedidos ({/* numeroDePedido && <span className="badge">{numeroDePedidos}</span> */}
                     0)
                  </div>
               </button>

         }

      </Container>
   )
}