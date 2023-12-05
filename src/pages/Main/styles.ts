import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px;

  overflow: hidden;

  max-width: 100vw;
  max-height: calc(100vh - 104px);
`;

export const Imagem = styled.img`
  max-height: calc(100vh - 104px);
  object-fit: contain;

  cursor: pointer;

  @media only screen and (max-width: 1240px) {
    width: auto;
    object-fit: contain;
  }

  @media only screen and (min-width: 1500px) {
    object-fit: contain;
  }

  @media only screen and (max-width: 1122px) {
    object-fit: fill;
  }
`;

export const MyLink = styled(Link)``;
