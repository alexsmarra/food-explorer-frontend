import { Container } from './styles'

export function Button({ title, ...rest }) {
   return (
      /* Todo botão tem que colocar 'type button' para não dar erro (alert e console.log podem não
         responder em tela) */
      <Container type="button" { ...rest }>
         {title}
      </Container>
   )
}