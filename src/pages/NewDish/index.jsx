import { Container, Form } from "./styles"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import { ButtonReturn } from "../../components/ButtonReturn"
import { Input } from "../../components/Input"
import { InputLabel } from "../../components/InputLabel"
import { Select } from "../../components/Select"

import { AiOutlineUpload } from "react-icons/ai";

export const NewDish = () => {
   return (
      <Container>
         <HeaderAdmin />
         <ButtonReturn title="Novo prato" />
         <Form>
           <div className="wrapper-inputs-one">
               <div className="wrapper-img-input">
                  <label htmlFor="img-input">Imagem do prato
                     <Input 
                        id="img-input" 
                        type="file" 
                        icon={AiOutlineUpload}
                        text="Selecione Imagem"
                     />
                  </label>
               </div>

               <InputLabel 
                  title="Nome" 
                  placeholder="Ex: Salada Ceasar"
               />

               <Select />

            </div> 
         </Form>
      </Container>
   )
}