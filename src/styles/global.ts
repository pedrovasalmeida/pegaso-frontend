import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
  }

  body {
    background: #fdfdfd;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    outline: 0;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  form, button, span, p, h1, h2, h3, h4, h5, h6, strong, input, a, img, svg {
    &::selection {
      background: #324286;
      color: #fdfdfd;
    }
  }

  button {
    cursor: pointer;
  }
`;
