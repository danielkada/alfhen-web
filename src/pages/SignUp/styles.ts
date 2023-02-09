import styled from 'styled-components';

export const Container = styled.div`
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;

  h3 {
    font-size: 22px;

    color: #000;

    margin-bottom: 36px;
  }

  .create {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 6px;

    width: 390px;
    height: 52px;

    background-color: #E22D2D;
    color: #fff;

    margin-top: 32px;

    font-size: 18px;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(226, 45, 45, 0.6);
    }

    &[disabled] {
      cursor: default;
      background-color: #B5B3B3 !important;
    }
  }

  a {
    color: #000;

    text-decoration: none;
    font-weight: bold;

    margin-top: 16px;

    transition: color 0.2s ease-in-out;

    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
