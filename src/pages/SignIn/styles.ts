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

  .to-enter {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid transparent;
    border-radius: 6px;

    margin-top: 32px;

    width: 390px;
    height: 52px;

    background-color: #E22D2D;

    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }

    &[disabled] {
      cursor: default;
      background-color: transparent !important;

      border: 2px solid #B5B3B3;

      &:hover {
        opacity: 1;
      }
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
