import { useAuth } from "../../hooks/auth"

import { Container } from './styles'


export function Input({ icon: Icon, ...rest }) {
   const { user } = useAuth()
   console.log(user.isAdmin)


   return (
      <Container className="input">
         {Icon && <Icon />}
         <input {...rest} />
      </Container>
   )
}