import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;


  }

  body {
    overflow-y: hidden;
    background-color: #D2D2D2;

    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
