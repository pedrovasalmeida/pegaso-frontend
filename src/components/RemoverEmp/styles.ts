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
`;

export const Nome = styled.span`
  white-space: nowrap;

  text-overflow: ellipsis;
  overflow: hidden;

  line-clamp: 2;

  width: 250px;

  &:first-child {
    font-weight: bold;
  }
`;

export const Descricao = styled.span`
  white-space: nowrap;

  text-overflow: ellipsis;
  overflow: hidden;

  line-clamp: 2;

  width: 250px;
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
`;
