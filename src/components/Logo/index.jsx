import { Container } from './styles'

export function Logo({ ...rest }) {
   return (
      <Container>
         <img { ...rest } />
         <h1>food explorer</h1>
      </Container>
   )
}