import { Container } from "./styles"

export const Section = ({ title, children }) => {
   return (
      <Container className="section">
         <h2>{title}</h2>
         {children}
      </Container>
   )
}