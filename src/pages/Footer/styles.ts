import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 62px;

  background-color: #C1C1C1;

  position: absolute;
  bottom: 0;

  a {
    background: transparent;
    border: none;

    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }

    & + a {
      margin-left: 32px;
    }
  }
`;
