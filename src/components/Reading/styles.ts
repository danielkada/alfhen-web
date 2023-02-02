import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  max-width: 1060px;
  height: 42px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

  background-color: #D9D9D9;

  & + div {
    margin-top: 54px;
  }

  .add {
    margin-left: 32px;
    margin-right: 32px;

    background-color: transparent;
    border: none;
  }

  .subtract {
    margin-left: 32px;
    margin-right: 32px;

    background-color: transparent;
    border: none;
  }

  .img {
    width: 70px;
    height: 70px;
  }

  .number-of-pages {
    background-color: #D9D9D9;

    width: 40px;
    height: 40px;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

    img {
      border-radius: 100%;

      width: 60px;
      height: 60px;

      object-fit: cover;
    }

    span {
      font-weight: bold;
      color: #E22D2D;
    }

    & + div {
      margin-left: 26px;
    }
  }

  h6 {
    color: #E22D2D;
  }
`;
