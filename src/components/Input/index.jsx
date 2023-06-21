import { Container } from './styles'

export function Input({ icon: Icon, ...rest }) {
   return (
      <Container className="input">
         {Icon && <Icon />}
         <input {...rest} />
      </Container>
   )
}