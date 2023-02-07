import styled, { css } from 'styled-components';

import { ContainerStyledProps } from './types';

export const Container = styled.div<ContainerStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px 32px;

  background-color: #F0DFDF;
  color: #000;

  border-radius: 6px;

  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);

  ${({ type }) => type === 'default' && css`
    background-color: #F0DFDF;
  `}

  ${({ type }) => type === 'error' && css`
    color: #fff;
    background-color: #B80303;
    `}

  ${({ type }) => type === 'success' && css`
    color: #fff;
    background-color: #209616;
  `}

  strong {
    ${({ type }) => type !== 'default' && css`
      margin-left: 8px;
    `}
  }

  & + & {
    margin-top: 12px;
  }
`;
