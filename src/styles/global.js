import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root {
      font-size: 62.5%;
   }

   body {
      background: ${({ theme }) => theme.COLORS.MAIN_BACKGROUND};
      color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
      -webkit-font-smoothing: antialiased;
      font-family: 'Poppins', sans-serif;
   }

   body, input, button, textarea {
      font-size: 1.6rem;
      font-family: 'Poppins', sans-serif;
      outline: none;
   }
`