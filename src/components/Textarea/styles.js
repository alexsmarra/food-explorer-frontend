import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

   label {
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
   }

   textarea {
      background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND_2};
      border: none;
      resize: none;
      height: 100px;

      &::placeholder {
         color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT_COLOR};
         font-size: 1rem;
         padding: 1.2rem;
      }
   }
`