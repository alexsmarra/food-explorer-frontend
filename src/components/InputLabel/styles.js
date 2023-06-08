import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: .8rem; 
   margin-bottom: 3.2rem;

   label {
      color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
      font-family: 'Roboto', sans-serif;
   }

   input {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT_COLOR};
   }
`