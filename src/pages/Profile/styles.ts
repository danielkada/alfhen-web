import styled from 'styled-components';

export const Image = styled.img``;

export const Container = styled.div`
  padding: 80px;

  img {
    position: absolute;
  }

  h3 {
    font-size: 26px;
  }

  form {
    margin-top: 32px;

    .input-container {
      display: flex;

      label {
        color: #E22D2D;

        width: 160px;
      }

      input {
        width: 300px;
        height: 42px;

        background-color: #F0DFDF;
        color: #E22D2D;

        border: 1px solid transparent;
        border-radius: 6px;

        padding: 0 16px;

        font-family: 'Acme', sans-serif;
        font-size: 18px;

        &::placeholder {
          color: #B5B3B3;
        }

        transition: border 0.2s ease-in-out;

        &:focus {
          border: 1px solid #E22D2D;
        }
      }

      & + div {
        margin-top: 16px;
      }
    }

    .button-container {
      width: 100%;

      display: flex;
      justify-content: center;

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 6px;

        width: 300px;
        height: 42px;

        margin-top: 70px;

        background: #E22D2D;
        color: #fff;

        font-size: 16px;

        transition: background 0.2s ease-in-out;

        &:hover {
          background: rgba(226, 45, 45, 0.6);
        }

        &[disabled] {
          cursor: default;
          background: rgba(226, 45, 45, 0.6) !important;
        }
      }
    }
  }

`;
