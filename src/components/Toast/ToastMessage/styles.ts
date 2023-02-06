import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px 32px;

  background-color: #F0DFDF;
  color: #000;

  border-radius: 6px;

  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);

  strong {
    margin-left: 8px;
  }

  & + & {
    margin-top: 12px;
  }
`;
