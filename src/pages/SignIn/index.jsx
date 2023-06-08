import { Container, Head } from './styles'

import { Logo } from '../../components/Logo' 
import { InputLabel } from '../../components/InputLabel' 
import { Button } from '../../components/Button' 

import LogoPolygon from '../../assets/menu/Polygon.svg'

export function SignIn() {
   return (
      <Container>
         <Head>
            <Logo 
               src={LogoPolygon} alt="Imagem de um polígono da logo" 
            />
         </Head>

         <InputLabel 
            htmlFor="1" id="1" title="Email" 
            type="text" placeholder="Exemplo: exemplo@exemplo.com.br" 
         />
         
         <InputLabel 
            htmlFor="2" id="2" title="Senha" 
            type="password" placeholder="No mínimo 6 caracteres" 
         />

         <Button 
            title="Entrar"
         />
      </Container>
   )
}