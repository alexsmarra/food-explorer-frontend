import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: .8rem; 

   min-width: 22rem;
   height: 35px;

   label {
      color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
      font-size: 1.4rem;
      font-family: 'Roboto', sans-serif;
   }

   input {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT_COLOR};
      height: 36px;
      font-size: 1.4rem;
   }
`