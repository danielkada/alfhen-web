import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  border-top: 1px solid #E22D2D;

  padding: 20px 0 20px 40px;

  height: 400px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #E22D2D;
  }
`;

export const NoBooks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  strong {
    color: #E22D2D;

    word-wrap: break-word;
  }

  p {
    width: 80%;

    color: #484848;
    font-size: 18px;

    word-wrap: break-word;

    span {
      margin-top: 4px;
      margin-left: 8px;
    }
  }
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;

  border-radius: 6px;
  border: 1px solid rgba(226, 45, 45, 0.2);

  width: 180px;
  height: 240px;
  padding: 0 16px;
  margin: 10px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

  background-color: #D9D9D9;

  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }

  .text-container {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80px;
    width: 100%;

    margin-top: 20px;

    border-radius: 6px;

    h4 {
      text-align: center;

      color: #484848;
    }
  }

  img {
    width: 110px;
    height: 110px;

    object-fit: cover;
  }

  a {
    text-decoration: none;

    border: none;
    background-color: transparent;

    color: #E22D2D;

    transition: color 0.2s ease-in-out;

    &:hover {
      color: rgba(226, 45, 45, 0.6);
    }
  }
`;
