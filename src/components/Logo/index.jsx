import { Container } from './styles'

import Polygon from "../../assets/menu/Polygon.svg"

export function Logo() {
   return (
      <Container className="logo">
         <img src={Polygon} alt="logo do restaurante, um polígono azul" />
         <h1>food explorer</h1>
      </Container>
   )
}