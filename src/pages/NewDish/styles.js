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
      padding: 4.6rem 1.6rem 2.4rem;

      // btn admin para pedidos
      .pedidos-button {
         display: none;
      }
   }

   .button-return {
      padding-top: 1rem;
      padding-left: 1.6rem;
   }

@media(min-width: 360px) {
   .header-admin {
      padding: 4.6rem 2.5rem 2.4rem;
   }

   .button-return {
      padding-top: 2rem;
      padding-left: 2.5rem;
   }
}
@media(min-width: 414px) {
   .header-admin {
      padding: 4.6rem 3rem 2.4rem;
   }

   .button-return {
      margin-top: 2rem;
      padding-left: 3rem;
   }
}

@media(min-width: 768px) {
   .header-admin {
      padding: 4.6rem 6rem 2.4rem;
   }

   .button-return {
      gap: 2rem;
      padding-left: 6rem;

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

@media(min-width: 1280px) {
   .header-admin {
      padding: 4.6rem 10rem 2.4rem;
   }

   .button-return {
      padding-left: 30rem;
   }
}

@media(min-width: 1536px) {
   .header-admin {
      padding: 4.6rem 12.3rem 2.4rem;
   }

   .button-return {
      padding-left: 12.3rem;
   }
}
`

export const Form = styled.form`
grid-area: form;
margin: 0 1.6rem;
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
      gap: 1rem;

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

@media(min-width: 360px) {
margin: 0 2.5rem;

   button.btn-form {
      font-size: 1.3rem;
      height: 40px;
   }
}

@media(min-width: 414px) {
margin: 0 3rem;

   .wrapper-inputs-one {
      margin-top: 3rem;
   }
}

@media(min-width: 768px) {
margin: 0 6rem;

   .wrapper-inputs-one {
      margin-top: 5rem;

      .wrapper-img-input {
         label {
            span {
               font-size: 1.3rem;
            }
            .input {
               height: 55px;
               font-size: 1.3rem;
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
            &::placeholder {
               font-size: 1.3rem;
            }
         }
      }

      .custom-select {
         label {
            font-size: 1.3rem;
         }

         .select-custom {
            font-size: 1.3rem;
            
            .custom-select__input-container {
               height: 45px;
            }
         }
      }
   }

   .wrapper-inputs-two {
      .ingredients {
         span {
            font-size: 1.3rem;
         }

         .tags {
            height: 55px;

            .ingredients-item {
               input {
                  height: 32px;
                  &::placeholder {
                     font-size: 1.1rem;
                  }
               }

               button {
                  svg {
                     font-size: 1.6rem;
                  }
               }
            }
         }
      }

      .input-label {
         label {
            font-size: 1.3rem;
         }

         input {
            font-size: 1.3rem;
            padding-top: 27.5px;
            padding-bottom: 27.5px;

            &::placeholder {
               font-size: 1.3rem;
            }
         }
      }

      .textarea {
         margin-top: 22px;
         label {
            font-size: 1.3rem;
         }

         textarea {
            &::placeholder {
               font-size: 1.3rem;
            }
         }
      }

      button.btn-form {
         font-size: 1.3rem;
         height: 45px;
         margin-top: 1.5rem;
         margin-bottom: 7rem;
      }
   }
}

@media(min-width: 1280px) {
margin: 0 30rem;

   .wrapper-inputs-two {
      button.btn-form {
         font-size: 1.3rem;
         height: 55px;
         margin-top: 1.5rem;
         margin-bottom: 7rem;
      }
   }
}

@media(min-width: 1536px) {
margin: 0 12.3rem;
   
   .wrapper-inputs-one {
      flex-direction: row;
      /* align-items: center; */
      gap: 3rem;

      .wrapper-img-input {
         flex: 1;

         label {
            span {
               /* font-size: 1.3rem; */
            }
            .input {
               /* height: 55px; */
               /* font-size: 1.3rem; */
            }
         }
      }

      .input-label {
         flex: 1;
         margin-top: 9px;

         label {
            /* font-size: 1.3rem; */
         }

         input {
            /* font-size: 1.3rem; */
            padding-top: 19.5px;
            padding-bottom: 19.5px;

            &::placeholder {
               /* font-size: 1.3rem; */
            }
         }
      }

      .custom-select {
         flex: 1;
         margin-top: 7px;
      }
   }
}
`
