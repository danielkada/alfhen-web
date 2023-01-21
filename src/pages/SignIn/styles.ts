import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .book-img {
    width: 440px;
    height: 704px;

    flex: 1;

    @media(max-width: 1000px) {
      display: none;
    }
  }
`;

export const InputContainer = styled.form`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 168px;

  input {
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
  }

  button {
    border: none;

    margin-top: 70px;

    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }

    &[disabled] {
      cursor: default;
      opacity: 0.5 !important;
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
