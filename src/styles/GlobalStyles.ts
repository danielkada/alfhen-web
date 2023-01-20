import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-size: 16px;
    font-family: 'Inter', sans-serif;

    background: #D2D2D2;

    button {
      cursor: pointer;
    }
  }
`;
