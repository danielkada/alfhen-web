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

  button {
    display: flex;

    border: none;

    margin-top: 70px;

    transition: opacity 0.2s ease-in-out;
    background-color: transparent;

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
