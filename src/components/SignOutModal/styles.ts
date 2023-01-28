import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  background-color: rgba(96, 96, 96, 0.4);
  backdrop-filter: blur(2px);

  position: absolute;
`;

export const Container = styled.div`
  width: 400px;
  height: 240px;
  padding: 22px;

  background-color: #fff;

  border-radius: 6px;

  h3 {
    font-size: 22px;
  }

  .content {
    margin-top: 42px;
    text-align: center;

    .buttons-container {
      margin-top: 32px;

      button {
        width: 100px;
        height: 32px;

        border: none;

        transition: background-color 0.2s ease-in-out;
      }

      .leave {
        background-color: #E22D2D;
        color: #fff;

        &:hover {
          background-color: rgba(226, 45, 45, 0.6);
        }
      }

      .cancel {
        background-color: #B5B3B3;
        margin-left: 8px;

        &:hover {
          background-color: rgba(181, 179, 179, 0.6);
        }
      }
    }
  }
`;
