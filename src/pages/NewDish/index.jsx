import { useState } from "react"

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
   const [image, setImage] = useState(null)
   const [name, setName] = useState("")
   const [selectedCategory, setSelectedCategory] = useState('refeicao')
   const [tags, setTags] = useState([])
   const [newTag, setNewTag] = useState("")
   const [price, setPrice] = useState("")
   const [description, setDescription] = useState("")

   const handleCategoryChange = category => {
      setSelectedCategory(category.value)
   }

   function handleAddTag() {
      if(newTag.length > 0) {
         setTags(prevState => [...prevState, newTag])
         setNewTag("")
      } else {
         return
      }
   }

   function handleRemoveTag(deleted) {
      setTags(prevState => prevState.filter(tag => tag !== deleted))
   }

      /* A função handlePriceChange é um evento que é chamado quando ocorre uma mudança no input 
      de preço. 'e' é o evento passado para a função e contém informações sobre a mudança no input.
      e.target.value é o valor atual do input de preço. */
   const handlePriceChange = e => {
      /* inputPrice é uma variável que armazena o valor atual do input após remover todos os caracteres não numéricos. Isso é feito usando a função replace com a expressão regular /[^0-9]/g, que substitui todos os caracteres que não são dígitos numéricos por uma string vazia. */
      let inputPrice = e.target.value.replace(/[^0-9,]/g, '')


      /* No JS, o método indexOf retorna o primeiro índice da primeira ocorrência de um determinado
      valor em uma string. Se o valor não for encontrado, o método retorna -1 . Já se a vírgula (em 
      nosso caso) estiver presente, ele retorna o índice da primeira ocorrência */
      const commaIndex = inputPrice.indexOf(",")

      /* 
      - O método slice() é utilizado para extrair uma parte de uma string, com base nos índices de início e fim especificados. Ele retorna uma nova string contendo a parte extraída da string original.
      - No contexto do código, inputPrice é a string que contém o valor do preço. A linha em questão divide essa string em duas partes:
      - inputPrice.slice(0, commaIndex + 1): Essa parte extrai uma substring que vai desde o início da string até o índice da primeira vírgula (commaIndex). O índice commaIndex + 1 é usado para incluir a própria vírgula na substring. Isso significa que a primeira parte resultante da divisão contém todos os caracteres da string inputPrice até a primeira vírgula (contando com ela, por isso o '+1').
      - Sobre a segunda parte resultante da divisão ' inputPrice.slice(commaIndex + 1)  ': Essa parte extrai uma substring que vai desde o índice imediatamente após a primeira vírgula até o final da string inputPrice. Isso significa que a segunda parte resultante contém todos os caracteres da string inputPrice após a primeira vírgula, excluindo a própria vírgula. E no replace substituímos toda virgula dessa segunda parte por uma string vazia
      - Ao combinar essas duas partes novamente com o operador de concatenação (+), estamos criando uma nova string que contém a primeira parte (até a primeira vírgula, contando com ela) e a segunda parte (após a primeira vírgula), sendo assim, mantemos apenas a primeira vírgula e removemos as vírgulas adicionais.
      - Em resumo, essa linha de código divide a string inputPrice em duas partes, removendo as vírgulas adicionais, mas preservando apenas a primeira vírgula.
      */
      if(commaIndex !== -1) {
         inputPrice = 
            inputPrice.slice(0, commaIndex + 1) + 
            inputPrice.slice(commaIndex + 1).replace(/,/g, '')
      }
      
      /* newPrice é uma variável que guarda o novo valor do preço que será definido como estado. Se 
      inputPrice tiver um comprimento maior que zero, significa que o usuário digitou pelo menos um 
      número. Nesse caso, concatenamos "R$" com inputPrice usando a sintaxe de template string (${}). 
      Caso contrário, se inputPrice for uma string vazia, newPrice será uma string vazia também.
      Finalmente, chamamos setPrice(newPrice) para atualizar o estado price com o novo valor. */
      const newPrice = inputPrice.length > 0 ? `R$${inputPrice}` : ''
      setPrice(newPrice)
   }   
         
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
                        onChange={e => setImage(e.target.files[0])}
                     />
                  </label>
               </div>

               <InputLabel 
                  title="Nome" 
                  placeholder="Ex: Salada Ceasar"
                  onChange={e => setName(e.target.value)}
               />

               <CustomSelect 
                  onChange={handleCategoryChange}
               />
            </div> 

           <div className="wrapper-inputs-two">
               <div className="ingredients">
                  <span>Ingredientes</span>
                  <div className="tags">
                     {
                        tags.map((tag, index) => (
                           <IngredientsItem 
                              isNew={false}
                              key={String(index)}
                              value={tag}
                              onClick={() => handleRemoveTag(tag)}
                           />
                        ))
                     }

                     <IngredientsItem 
                        isNew={true}
                        placeholder="Adicionar"
                        value={newTag}
                        onChange={e => setNewTag(e.target.value)}
                        onClick={handleAddTag}
                     />

                  </div>
               </div>

               <InputLabel 
                  title="Preço" 
                  placeholder="R$00,00"
                  onChange={handlePriceChange}
                  value={price}
               />

               <Textarea
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  onChange={e => setDescription(e.target.value)}
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