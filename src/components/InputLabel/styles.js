import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;

   label {
      color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
   }

   input {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT_COLOR};
   }
`