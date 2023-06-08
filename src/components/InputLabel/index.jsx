import { Container } from './styles'

export function InputLabel({ title, ...rest }) {
   return (
      <Container>
         <label>{ title }</label>
         <input {...rest} />
      </Container>
   )
}