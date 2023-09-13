import styled from 'styled-components'

export const Container = styled.div`
display: grid;
height: 100vh;
grid-template-areas:
"header"
"buttonReturn"
"form"
"footer";
grid-template-rows: 70px 100px 1fr 40px;

   .header-admin {
      // btn admin para pedidos
      .pedidos-button {
         display: none;
      }
   }

   .button-return {
      padding-top: 1rem;

      button {
         padding-left: .7rem;
      }

      h2 {
         padding-left: 1.05rem;
      }
   }

@media(min-width: 390px) {
   .button-return {
      padding-top: 2rem;

      button {
         padding-left: 2.2rem;
      }

      h2 {
         padding-left: 2.2rem;
      }
   }
}
@media(min-width: 414px) {
   .button-return {
      margin-top: 2rem;

      button {
         padding-left: 2.5rem;
      }

      h2 {
         padding-left: 2.5rem;
      }
   }
}

@media(min-width: 768px) {
   .button-return {
      gap: 2rem;
      button { 
         img {
            width: 2.5rem;
            height: 2.5rem;
         }
         span {
            font-size: 2rem;
         }
      }

      h2 {
         font-size: 2.7rem;
      }
   }
}
`

export const Form = styled.form`
grid-area: form;
margin: 0 1.05rem;
display: flex;
flex-direction: column;
gap: 1.5rem;

   span {
      display: inline-flex;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
      font-size: 1rem;
   }

   .wrapper-inputs-one {
      display: flex;
      flex-direction: column;
      gap: 5rem;

      label {
         font-size: 1rem;
         font-family: 'Roboto', sans-serif;
         color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
      }

      .wrapper-img-input {
         margin-bottom: -3rem;

         label {
            
            .input {
               background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND_2};
               color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
               gap: .5rem;
               height: 40px;
                
               svg {
                  background: none;
                  color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
                }
            
               input {
                  display: none;
               }
            }
         }

      }

      .input-label {

         input {
            background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND_2};
            height: 40px;
            font-size: 1rem;

            &::placeholder {
               font-size: 1rem;
            }
         }
      }

      .custom-select {
         display: flex;
         flex-direction: column;
      }
   }

   .wrapper-inputs-two {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .ingredients .tags {
         display: flex;
         align-items: center;
         justify-content: flex-start;
         flex-wrap: wrap;
         background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND_2};
         border-radius: 5px;
         padding: .5rem 7px;
         gap: 1rem;
      }

      .input-label {
         margin-bottom: 2rem;

         label {
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
         }  

         input {
            background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND_2};
            height: 40px;
            font-size: 1rem;

            &::placeholder {
               font-size: 1rem;
            }
         }
      }

      button.btn-form {
         background-color: ${({ theme }) => theme.COLORS.BUTTON_FORM_COLOR};
         font-size: 1rem;
         margin-bottom: 4rem;
      }
   }

@media(min-width: 390px) {
margin: 0 2.2rem;
}

@media(min-width: 414px) {
margin: 0 2.5rem;

   .wrapper-inputs-one {
      margin-top: 3rem;
   }
}

@media(min-width: 768px) {
   .wrapper-inputs-one {
      margin-top: 5rem;

      .wrapper-img-input {
         label {
            span {
               font-size: 1.3rem;
            }
            .input {
               height: 55px;
            }
         }
      }

      .input-label {
         height: 75px;
         margin-bottom: -30px;

         label {
            font-size: 1.3rem;
         }

         input {
            height: 75px;

         }
      }

      .custom-select {
         label {
            font-size: 1.3rem;
         }

         .custom-select__input-container {
            height: 45px;
         }
      }
   }

   .wrapper-inputs-two {
      .ingredients {
         span {
            font-size: 1.3rem;
         }
      }

      .input-label {
         label {
            font-size: 1.3rem;
         }
      }

      .textarea {
         label {
            font-size: 1.3rem;
         }
      }
   }
}
`
