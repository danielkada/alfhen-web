import styled from 'styled-components';

export const Container = styled.div`

`;

export const Book = styled.div`
  display: flex;
  align-items: center;

  max-width: 1060px;
  height: 42px;

  padding: 0 68px;

  background-color: #D9D9D9;

  & + div {
    margin-top: 64px;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 70px;
    height: 70px;

    border-radius: 100%;
    border: 1px solid #000;

    span {
      font-weight: bold;
      color: #E22D2D;
    }

    & + div {
      margin-left: 26px;
    }
  }

  h6 {
    margin-left: 64px;
    color: #E22D2D;
  }
`;
