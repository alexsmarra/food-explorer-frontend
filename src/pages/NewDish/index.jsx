import { Container, Form } from "./styles"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import { ButtonReturn } from "../../components/ButtonReturn"
import { Input } from "../../components/Input"
import { InputLabel } from "../../components/InputLabel"
import { CustomSelect } from "../../components/CustomSelect"

import { BiUpload } from "react-icons/bi";

export const NewDish = () => {
   return (
      <Container>
         <HeaderAdmin />

         <ButtonReturn title="Novo prato" />

         <Form>
           <div className="wrapper-inputs-one">
               <div className="wrapper-img-input">
                  <label htmlFor="img-input">
                     <span>Imagem do prato</span>
                     <Input 
                        id="img-input" 
                        type="file" 
                        icon={BiUpload}
                        text="Selecione Imagem"
                     />
                  </label>
               </div>

               <InputLabel 
                  title="Nome" 
                  placeholder="Ex: Salada Ceasar"
               />

               <CustomSelect />
            </div> 

           <div className="wrapper-inputs-two">
               <div className="ingredients">
                  <span>Ingredientes</span>
                  <div className="tags">
                     <div className="a">note</div>
                     <div className="b">note +</div>
                  </div>
               </div>
           </div>

         </Form>
      </Container>
   )
}