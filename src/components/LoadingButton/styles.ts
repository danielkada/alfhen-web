import styled, { keyframes } from 'styled-components';

const ldsDualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:after {
    content: " ";
    display: block;
    width: 22px;
    height: 22px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${ldsDualRing} 1.2s linear infinite;
  }
`;
