import styled, { css } from 'styled-components';

import { YourReadingStyledProps } from './types';

export const Container = styled.div`
  padding: 80px
`;

export const YourReadings = styled.div<YourReadingStyledProps>`
  ${({ isLoading }) => isLoading && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  height: 400px;

  overflow-y: auto;

  padding: 20px 8px 26px 0;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #E22D2D;
  }

  h3 {
    color: #E22D2D;
  }
`;
