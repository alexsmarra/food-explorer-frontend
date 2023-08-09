import styled from 'styled-components'

export const Container = styled.div`   
   width: 100%;
   display: flex;
   align-items: center;

   background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};

   border-radius: 8px;

   > svg {
      width: 24px;
      height: 24px;
      color: #C4C4CD;
      margin-left: 20px;
      cursor: pointer;
   }

   > input {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT_COLOR};
      width: 100%;
      height: 40px;
   }

@media(min-width: 1281px) {
   >input {
      height: 50px;
   }
}
`