import styled from 'styled-components';
import { shade } from 'polished';

import { Link } from 'react-router-dom';

import { BsArrowBarRight } from 'react-icons/bs';

export const Container = styled.div`
  width: 95vw;
`;

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 80px 0;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 95%;

  margin: 16px 4px;
  position: relative;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;

export const LinkRRD = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 85vw;

  margin: 16px 4px;
  position: relative;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;

  color: #333;

  transition: all 300ms ease;

  &:hover {
    color: #324282;
    text-decoration: none;
  }
`;

export const ArrowIcon = styled(BsArrowBarRight)`
  font-size: 40px;

  cursor: pointer;

  color: #333;

  transition: all 300ms ease-in-out;
  &:hover {
    transition: all 300ms ease-in-out;
    filter: drop-shadow(0px 0px 1px ${shade(0.4, `rgba(0, 0, 0, 0.6)`)});
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

  line-clamp: 1;
  max-width: 100%;

  &:first-child {
    font-weight: bold;
  }
`;

export const Descricao = styled.span`
  white-space: nowrap;

  text-overflow: ellipsis;
  overflow: hidden;

  line-clamp: 2;
  max-width: 80%;
`;
