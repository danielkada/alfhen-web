import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  width: 100%;
  margin-top: 200px;
`;

export const ButtonsContainer = styled.div`
  display: flex;

  padding: 16px;


  a {
    display: flex;
    justify-content: center;

    border: 2px solid #E22D2D;

    text-decoration: none;

    width: 200px;
    padding: 10px 16px;

    color: #000;

    & + a {
      margin-left: 16px;
    }

    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #E22D2D;
      color: #fff;

      font-weight: bold;
      font-size: 15px;
    }
  }
`;
