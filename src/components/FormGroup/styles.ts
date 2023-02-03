import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 16px;
  }
`;

export const Error = styled.small`
  margin-top: 6px;

  color: #B80303;
`;
