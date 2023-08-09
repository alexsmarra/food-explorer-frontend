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
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT_COLOR};
      border: none;
      resize: none;
      height: 100px;
      padding: 1.2rem;
      font-size: 1rem;

      &::placeholder {
         color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT_COLOR};
         font-size: 1rem;
      }
   }
`