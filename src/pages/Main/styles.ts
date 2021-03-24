import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px;

  max-width: 100vw;
  max-height: calc(100vh - 104px);
`;

export const Imagem = styled.img`
  cursor: pointer;

  max-width: 100vw;
  max-height: calc(100vh - 104px);
  width: 100vw;
  height: 976px;
  object-fit: fill;

  @media only screen and (max-width: 1240px) {
    width: auto;
    object-fit: contain;
  }
`;

export const MyLink = styled(Link)``;
