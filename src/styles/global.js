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

   input, button {
      border: none;
      border-radius: 5px;
   }

   input {
      background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
      line-height: 16px;
      padding: 16px 14px;
   }

   button {
      line-height: 24px;
      color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
      background: none;
   }

   button, a {
      transition: filter 0.2s;
      cursor: pointer;
   }

   button:hover, a:hover {
      filter: brightness(.9);
   }

   a {
      font-size: 1.4rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
   }
`