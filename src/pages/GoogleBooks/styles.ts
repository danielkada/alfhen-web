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

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 12px;

  width: 140px;
  height: 200px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

  background-color: #D9D9D9;

  margin: 10px;

  img {
    width: 140px;
    height: 140px;

    object-fit: cover;
  }

  a {
    display: flex;
    justify-content: center;

    text-decoration: none;

    border: none;
    background-color: transparent;

    margin-top: 22px;

    color: #E22D2D;

    transition: color 0.2s ease-in-out;

    &:hover {
      color: rgba(226, 45, 45, 0.6);
    }
  }
`;
