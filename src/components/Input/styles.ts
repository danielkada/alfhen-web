import styled, { css } from 'styled-components';
import { ContainerStyledProps } from './types';

export const Container = styled.div<ContainerStyledProps>`
  display: flex;
  align-items: center;

  width: 390px;
  height: 52px;

  background-color: #ECE3E3;

  padding: 0 16px;

  border: 1px solid transparent;
  border-radius: 6px;

  transition: border 0.2s ease-in-out;

  ${({ isFocused }) => isFocused && css`
    border: 1px solid #E22D2D;
  `}

  ${({ error }) => error && css`
    border: 1px solid #B80303 !important;
  `}

  button {
    background-color: transparent;

    border: none;
  }

  .icon {
    display: flex;
    justify-content: center;

    width: 40px;
  }

  input {
    width: 100%;

    border: 1px solid transparent;

    color: #E22D2D;
    background-color: #ECE3E3;

    font-family: 'Acme', sans-serif;
    font-size: 18px;

    margin-left: 8px;

    &::placeholder {
      color: #B5B3B3;
    }
  }
`;

export const Input = styled.input`

`;
