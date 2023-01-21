import styled from 'styled-components';

export const Input = styled.input`
  width: 390px;
  height: 52px;

  padding: 0 16px;
  border: 1px solid transparent;

  background: #ECE3E3;

  color: #E22D2D;

  transition: border 0.2s ease-in-out;

  & + input {
    margin-top: 16px;
  }

  &:focus {
    border: 1px solid #E22D2D;
  }
`;
