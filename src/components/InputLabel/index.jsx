import { Container } from './styles'

export function InputLabel({ title, ...rest }) {
   return (
      <Container className="input-label">
         <label>{ title }</label>
         <input {...rest} />
      </Container>
   )
}