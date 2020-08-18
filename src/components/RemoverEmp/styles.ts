import styled from 'styled-components';
import { shade } from 'polished';

import { AiOutlineDelete } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';

export const Container = styled.div`
  position: relative;
  width: 90%;
`;

export const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 80px 0;

  @media (max-width: 1256px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 45%;

  margin: 16px 4px;
  position: relative;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;

  @media (max-width: 1256px) {
    width: 90%;
  }
`;

export const ArrowIcon = styled(AiOutlineDelete)`
  font-size: 40px;

  cursor: pointer;

  color: #333;

  transition: all 300ms ease-in-out;

  &:hover {
    transition: all 300ms ease-in-out;
    filter: drop-shadow(0px 0px 1px ${shade(0.1, `#324286`)});
  }
`;

export const DivIcon = styled.div`
  position: absolute;
  top: 25%;
  right: 2%;
`;

export const Avatar = styled.img`
  width: 88px;
  height: 88px;
  flex-shrink: 0;

  margin: 0 16px 0 0;

  border-radius: 50%;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

export const Nome = styled.span`
  white-space: nowrap;

  text-overflow: ellipsis;
  overflow: hidden;

  width: 250px;

  &:first-child {
    font-weight: bold;
  }

  @media (max-width: 414px) {
    line-clamp: 1;
    max-width: 100%;
  }
`;

export const Descricao = styled.span`
  white-space: nowrap;

  text-overflow: ellipsis;
  overflow: hidden;

  line-clamp: 2;
  max-width: 25vw;

  @media (max-width: 1639px) {
    max-width: 50%;
  }

  @media (max-width: 1555px) {
    max-width: 40%;
  }

  @media (max-width: 1256px) {
    max-width: 80%;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 10vh;
  left: 20vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 650px;
  min-height: 150px;
  height: auto;

  border: 1px solid #000;
  border-radius: 16px;

  background-color: #fdfdfd;
  filter: drop-shadow(-4px 4px 8px ${shade(0.6, '#324286')});

  z-index: 5;

  @media (max-width: 414px) {
    top: 10vh;
    left: 5vw;

    width: 350px;
    min-height: 150px;
    height: auto;

    padding: 8px;
  }

  @media (max-width: 320px) {
    top: 10vh;
    left: 5vw;

    width: 310px;
    min-height: 150px;
    height: auto;

    padding: 8px;
  }
`;

export const CloseIcon = styled(TiDelete)`
  position: absolute;
  right: 16px;
  top: 16px;

  font-size: 40px;

  color: #333;

  cursor: pointer;
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;

  margin: 16px;

  background-color: #fdfdfd;

  border: 1px solid #333;
  border-radius: 16px;

  transition: background-color 300ms ease;
  &:hover {
    background-color: green;
  }
`;

export const InfoModal = styled.div`
  position: absolute;
  top: 10vh;
  left: 20vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 650px;
  min-height: 150px;
  height: auto;

  border: 1px solid #000;
  border-radius: 16px;

  background-color: #fdfdfd;
  filter: drop-shadow(-4px 4px 8px ${shade(0.6, '#324286')});

  z-index: 5;

  @media (max-width: 414px) {
    top: 10vh;
    left: 5vw;

    width: 350px;
    min-height: 150px;
    height: auto;

    padding: 8px;
  }

  @media (max-width: 320px) {
    top: 10vh;
    left: 5vw;

    width: 310px;
    min-height: 150px;
    height: auto;

    padding: 8px;
  }
`;
