import { Container } from "./styles"

export const Textarea = ({ ...rest }) => {
   return (
      <Container className="textarea">
         <label htmlFor="textarea">Descrição</label>
         <textarea 
            name="textarea"
            {...rest}
         >
         </textarea>
      </Container>
   )
}