import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Container, Head, Form } from './styles'

import { useNavigate } from 'react-router-dom'

import { Logo } from '../../components/Logo' 
import { InputLabel } from '../../components/InputLabel' 
import { Button } from '../../components/Button' 

import LogoPolygon from '../../assets/menu/Polygon.svg'

export function SignIn() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   
   const { signIn } = useAuth()
   
   function handleSignIn() {
      /* pegará o email e password digitado pelo usuário (com a ajuda do nosso useState) para ser 
      usado na function signIn que está em nosso auth.jsx */
      signIn({ email, password })
   }
   
   const navigate = useNavigate()

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
               onChange={e => setEmail(e.target.value)} 
            />
            
            <InputLabel 
               htmlFor="2" id="2" title="Senha" 
               type="password" placeholder="No mínimo 6 caracteres" 
               onChange={e => setPassword(e.target.value)}
            />

            <Button 
               title="Entrar"
               onClick={handleSignIn}
            />

            <a onClick={() => navigate("/register")}>Criar uma conta</a>
         </Form>
      </Container>
   )
}