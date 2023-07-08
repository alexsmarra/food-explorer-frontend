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
   margin: 0 1.05rem;

   
      label {
         font-size: 1rem;
         font-family: 'Roboto', sans-serif;
         color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
      }

      .wrapper-img-input {

         label {

            span {
               display: inline-flex;
               margin-bottom: 1rem;
               color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
            }
            
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

      .select {
         display: flex;
         flex-direction: column;

         select {
            /* para retirar a setinha */
            appearance: none;
            /* no site canIuse podemos ver as configurações para todos os navegadores */
            /* mesma coisa, mas para o mozilla */
            -moz-appearance: none;
            /* para chrome, safari.. */
            -webkit-appearance: none;
            /* essa imagem foi feita da seguinte forma: Copiamos o svg de uma setinha do figma de um projeto já pronto,  e no site https://yoksel.github.io/url-encoder/  nós colamos em INSERT SVG e em seguida copiamos de READY FOR CSS , colocando no css (código abaixo). Essa imagem está formatada de base64, que é em formato de texto */
            background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
            /* para imagem não se repetir */
            background-repeat: no-repeat;
            /* para posicionar a imagem no canto direito com um espaço de 24px e top 50% (no centro) */
            background-position: right 24px top 50%
         }
      }
   }
`