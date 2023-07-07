import styled from 'styled-components'

export const Container = styled.div`
display: grid;
height: 100vh;
grid-template-areas:
"header"
"buttonReturn"
"form";
grid-template-rows: 70px 90px 1fr;

   .header-admin {
      // btn admin para pedidos
      .pedidos-button {
         display: none;
      }
   }

   .button-return {
      padding-top: 1.4rem;

      button {
         padding-left: .7rem;
      }

      h2 {
         padding-left: 1.05rem;
      }
   }
`

export const Form = styled.form`
grid-area: form;

   .wrapper-inputs-one {
   display: flex;
   flex-direction: column;
   gap: 3rem;

      .wrapper-img-input {

         label {
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
            font-family: 'Roboto', sans-serif;
         }

         .input {
            input {
               display: none;
            }
         }
      }
   }
`