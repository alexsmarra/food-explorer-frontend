import { Container } from './styles'

export function Input({ icon: Icon, text, ...rest }) {

   return (
      <Container className="input">
         {Icon && <Icon size={20}/>}
         {text}
         <input {...rest} />
      </Container>
   )
}