import { useState } from 'react'
import { api } from '../../services/api'

import { Container, Head, Form } from './styles'

import { toast } from "react-toastify";

import { Logo } from '../../components/Logo' 
import { InputLabel } from '../../components/InputLabel' 
import { Button } from '../../components/Button' 

import LogoPolygon from '../../assets/menu/Polygon.svg'

export function SignUp() {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   function handleSignUp() {
      if(!name || !email || !password) {
         return alert("Fill in all fields, please!")
      }

      api.post('/users', { name, email, password })
      .then(() => {
         alert("Usuário cadastrado com sucesso")
         console.log("usuário criado")
         /* navigate('/') */
      })
      .catch(error => {
         if(error.response) {
            alert(error.response.data.message)
         } else {
            alert("Não foi possível cadastrar")
         }
      })
   }

   return (
      <Container>
         <Head>
            <Logo 
               src={LogoPolygon} alt="Imagem de um polígono da logo" 
            />
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

            <a href="#">Já possuo uma conta</a>
         </Form>
      </Container>
   )
}