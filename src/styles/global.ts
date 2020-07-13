import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Raleway', sans-serif;
  }

  body {
    background-image: linear-gradient(to right, #fff, #fafafa);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
