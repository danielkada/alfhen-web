import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 60px;

  .header {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;

      border: none;

      background-color: transparent;

      transition: opacity 0.2s ease-in-out;

      &:hover {
        opacity: 0.5;
      }

      &[disabled] {
        cursor: default;
        opacity: 0.5;
      }
    }

    span {
      margin-left: 6px;

      color: #E22D2D;
    }
  }

  .book {
    margin-top: 40px;

    h3 {
      font-size: 22px;
      color: #E22D2D;
    }

    .img {
      display: flex;
      justify-content: space-around;

      margin-top: 32px;

      img {
        width: 100px;
        height: 100px;

        border-radius: 100%;

        object-fit: cover;
      }

      .description {
        width: 500px;

        font-size: 14px;
        font-weight: bold;
      }
    }

    .book-information {
      display: flex;
      justify-content: space-between;

      margin-top: 16px;

      .informations {
        .text-container {
          display: flex;

          p {
            color: #000;

            & + p {
              margin-top: 6px;
            }
          }

          span {
            margin-left: 8px;

            font-size: 14px;
            color: #E22D2D;
          }
        }
      }

      .number-of-pages {
        span {
          font-size: 14px;
          color: #E22D2D;
          font-weight: bold;
        }

        input {
          padding-left: 16px;
          background-color: #ECE3E3;

          width: 100px;
          height: 32px;

          font-size: 16px;

          border: none;
        }
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    width: 240px;
    height: 42px;

    margin-top: 70px;

    background: #E22D2D;
    color: #fff;


    transition: background 0.2s ease-in-out;

    &:hover {
      background: rgba(226, 45, 45, 0.6);
    }

    &[disabled] {
      cursor: default;
      background: #B5B3B3 !important;
    }
  }

`;
