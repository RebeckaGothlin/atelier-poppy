// GlobalStyle.tsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Inter", sans-serif;
    color: #a9002d;
    background-color: #ffdcdc;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
