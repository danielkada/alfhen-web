import styled, { css } from 'styled-components';
import { ContainerStyledProps } from './types';

export const Container = styled.footer<ContainerStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 62px;

  background-color: #C1C1C1;

  position: fixed;
  bottom: 0;

  border-top: 1px solid #E22D2D;

  button {
    margin-left: 32px;

    background-color: transparent;

    border: none;

    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }

    & + a {
      margin-left: 32px;
    }
  }

  .profile {
    ${({ selected }) => selected === 'profile' && css`
      opacity: 0.5;
    `}
  }

  .readings {
    ${({ selected }) => selected === 'readings' && css`
      opacity: 0.5;
    `}
  }

  .books {
    ${({ selected }) => selected === 'books' && css`
      opacity: 0.5;
    `}
  }
`;
