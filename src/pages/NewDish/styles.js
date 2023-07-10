import styled from 'styled-components'

export const Container = styled.div`
display: grid;
height: 100vh;
grid-template-areas:
"header"
"buttonReturn"
"form";
grid-template-rows: 70px 100px 1fr;

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
`

export const Form = styled.form`
grid-area: form;
margin: 0 1.05rem;
display: flex;
flex-direction: column;
gap: 1rem;

   span {
         display: inline-flex;
         margin-bottom: 1rem;
         color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
         font-size: 1rem;
      }

   .wrapper-inputs-one {
   display: flex;
   flex-direction: column;
   gap: 4rem;

   
      label {
         font-size: 1rem;
         font-family: 'Roboto', sans-serif;
         color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
      }

      .wrapper-img-input {
         margin-bottom: -2rem;

         label {
            
            .input {
               background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND_2};
               gap: .5rem;
               height: 40px;
                
               svg {
                  background-color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
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
      .ingredients div {
         display: flex;
         background: orange;

         .a {
            background: green;
         }

         .b {
            background: blue;
         }
      }
   }

`