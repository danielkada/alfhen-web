import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px
`;

export const YourReadings = styled.div`
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
`;
