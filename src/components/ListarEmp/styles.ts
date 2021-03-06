import styled from 'styled-components';
import { shade } from 'polished';

import { Link } from 'react-router-dom';

import { BsArrowBarRight } from 'react-icons/bs';

export const Container = styled.div`
  width: 90%;
`;

export const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;

  @media (max-width: 1548px) {
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

  border: 1px solid ${props => props.theme.colors.light.gray};
  border-radius: 4px;
`;

export const LinkRRD = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 45%;

  margin: 16px 4px;
  position: relative;

  border: 1px solid ${props => props.theme.colors.light.gray};
  border-radius: 4px;

  color: #333;

  transition: all 300ms ease;

  &:hover {
    color: ${props => props.theme.colors.light.lightBlue};
    text-decoration: none;
  }

  @media (max-width: 1548px) {
    width: 90%;
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

  border-radius: 4px;
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

  line-clamp: 1;

  width: 20vw;

  @media only screen and (max-width: 1548px) {
    width: 40vw;
  }

  @media only screen and (max-width: 925px) {
    width: 30vw;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;

  padding-bottom: 8px;

  border-bottom: 1px solid ${props => props.theme.colors.light.gray};

  width: 90%;
`;
