import { useState } from 'react'
import { api } from '../../services/api'

import { Container, Head, Form } from './styles'

import { useNavigate } from 'react-router-dom'

import { Brand } from '../../components/Brand' 
import { InputLabel } from '../../components/InputLabel' 
import { Button } from '../../components/Button' 

export function SignUp() {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const navigate = useNavigate()

   function handleSignUp() {
      if(!name || !email || !password) {
         return alert("Fill in all fields, please!")
      }

      api.post('/users', { name, email, password })
      .then(() => {
         alert("Successfully registered user!")
         navigate('/')
      })
      .catch(error => {
         if(error.response) {
            // pega do AppError
            alert(error.response.data.message)
         } else {
            alert("Could not register!")
         }
      })
   }

   return (
      <Container>
         <Head>
            <Brand />
         </Head>

         <Form>
            <span>Crie sua conta</span>
            <InputLabel 
               htmlFor="3" id="3" title="Seu nome" 
               type="text" placeholder="Ex: Maria da Silva" 
               onChange={e => setName(e.target.value)}
            />

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
               title="Criar conta"
               onClick={handleSignUp}
               href="#"
            />

            <a onClick={() => navigate("/")}>Já possuo uma conta</a>
         </Form>
      </Container>
   )
}