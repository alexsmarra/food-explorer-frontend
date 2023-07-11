import { Container, Form } from "./styles"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import { ButtonReturn } from "../../components/ButtonReturn"
import { Input } from "../../components/Input"
import { InputLabel } from "../../components/InputLabel"
import { CustomSelect } from "../../components/CustomSelect"
import { IngredientsItem } from "../../components/IngredientsItem"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

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
                     <IngredientsItem 
                        isNew={true}
                        placeholder="Adicionar"
                     />

                     <IngredientsItem 
                        isNew={false}
                        value="Exemplo"
                     />
                  </div>
               </div>

               <InputLabel 
                  title="Preço" 
                  placeholder="R$00,00"
               />

               <Textarea
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
               />

               <Button
                  className="btn-form" 
                  title="Salvar alterações"
               />
           </div>
         </Form>

         <Footer />
      </Container>
   )
}