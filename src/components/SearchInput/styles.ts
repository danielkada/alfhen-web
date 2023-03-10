import styled, { css } from 'styled-components';

import { ContainerStyledProps } from './types';

export const Container = styled.div<ContainerStyledProps>`
  display: flex;
  align-items: center;

  background-color: #ECE3E3;

  border: 1px solid transparent;
  border-radius: 6px;

  width: 380px;

  transition: border 0.2s ease-in-out;

  ${({ isFocused }) => isFocused && css`
    border: 1px solid #E22D2D;
  `}

  input {
    width: 320px;
    height: 42px;

    border: none;

    padding: 0 16px;

    background-color: #ECE3E3;
    color: #E22D2D;

    font-family: 'Acme', sans-serif;
    font-size: 18px;
  }

  button {
    border: none;
    border-radius: 0 6px 6px 0;

    background-color: #E22D2D;

    height: 42px;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(226, 45, 45, 0.6);
    }

    &[disabled] {
      background-color: #B5B3B3 !important;
      cursor: default;
    }
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;

    border-left: 2px solid #E22D2D;
  }
`;
