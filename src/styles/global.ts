import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;

    &::selection {
      background: #0e6387;
      color: #f2f2f2;
    }
  }

  body {
    background: #fcfcfc;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    outline: 0;
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
  }

  span, p {
    font-family: 'Roboto Slab', serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
