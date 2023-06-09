import { Container, Head, Form } from './styles'

import { Logo } from '../../components/Logo' 
import { InputLabel } from '../../components/InputLabel' 
import { Button } from '../../components/Button' 

import LogoPolygon from '../../assets/menu/Polygon.svg'

export function SignUp() {
   return (
      <Container>
         <Head>
            <Logo 
               src={LogoPolygon} alt="Imagem de um polígono da logo" 
            />
         </Head>

         <Form>
            <InputLabel 
               htmlFor="3" id="3" title="Seu nome" 
               type="text" placeholder="Ex: Maria da Silva" 
            />

            <InputLabel 
               htmlFor="1" id="1" title="Email" 
               type="text" placeholder="Ex: maria@exemplo.com" 
            />
            
            <InputLabel 
               htmlFor="2" id="2" title="Senha" 
               type="password" placeholder="No mínimo 6 caracteres" 
            />

            <Button 
               title="Criar conta"
            />

            <a href="#">Já possuo uma conta</a>
         </Form>
      </Container>
   )
}