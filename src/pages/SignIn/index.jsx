import { Container, Head, Form } from './styles'

import { useAuth } from '../../hooks/auth'

import { useNavigate } from 'react-router-dom'

import { Logo } from '../../components/Logo' 
import { InputLabel } from '../../components/InputLabel' 
import { Button } from '../../components/Button' 

import LogoPolygon from '../../assets/menu/Polygon.svg'

export function SignIn() {
   const navigate = useNavigate()

   const { name, email } = useAuth()
   console.log(name, email)

   return (
      <Container>
         <Head>
            <Logo 
               src={LogoPolygon} alt="Imagem de um polígono da logo" 
            />
         </Head>

         <Form>
            <span>Faça login</span>
            <InputLabel 
               htmlFor="1" id="1" title="Email" 
               type="text" placeholder="Ex: maria@exemplo.com" 
            />
            
            <InputLabel 
               htmlFor="2" id="2" title="Senha" 
               type="password" placeholder="No mínimo 6 caracteres" 
            />

            <Button 
               title="Entrar"
            />

            <a onClick={() => navigate("/register")}>Criar uma conta</a>
         </Form>
      </Container>
   )
}