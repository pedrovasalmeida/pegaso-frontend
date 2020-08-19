import styled from 'styled-components';

import { shade, lighten } from 'polished';
import Select from 'react-select';

import { GrUpdate } from 'react-icons/gr';

interface InputProps {
  disabled?: boolean;
  whatImageType?: string;
}

export const Container = styled.div`
  background-color: #fdfdfd;
  width: 100%;

  background-color: green;

  height: calc(100vh - 160px);

  padding: 16px;
  margin: 0 0 40px 0;
`;

export const Input = styled.input<InputProps>`
  width: 352px;

  color: ${shade(0.4, '#324286')};

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};

  padding: 4px 8px;

  border: 1px solid ${shade(0.4, `#324286`)};
  border-radius: 8px;

  margin: 8px 0;

  background-color: ${(props) =>
    props.disabled
      ? `${lighten(0.55, '#324286')}`
      : `${lighten(0.62, '#324286')}`};

  transition: all 300ms ease;

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? `${lighten(0.55, '#324286')}`
        : `${lighten(0.6, '#324286')}`};
  }

  &:focus {
    border: 1px solid ${shade(0.4, `#324286`)};
    filter: drop-shadow(0px 0px 2px ${lighten(0.4, `#324286`)});
  }
`;

export const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 80px 0;

  background-color: red;

  @media (max-width: 1548px) {
    flex-direction: column;
  }
`;

export const DivDados = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 45%;

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

  @media (max-width: 1548px) {
    width: 90%;
  }
  @media (max-width: 320px) {
    width: 90%;
  }

  cursor: pointer;
`;

export const ArrowIcon = styled(GrUpdate)`
  font-size: 32px;

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

  width: 100%;
`;

export const Nome = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  line-clamp: 1;
  width: 50%;

  &:first-child {
    font-weight: bold;
  }
`;

export const Descricao = styled.span`
  white-space: nowrap;

  text-overflow: ellipsis;
  overflow: hidden;

  line-clamp: 2;

  width: 70%;

  @media (max-width: 580px) {
    max-width: 50%;
  }
  @media (max-width: 320px) {
    max-width: 40%;
  }

  /* @media (max-width: 1548px) {
    width: 80%;
  }

  @media (max-width: 1170px) {
    max-width: 50%;
    width: auto;
  }

  @media (max-width: 640px) {
    max-width: 40%;
    width: auto;
  }

  @media (max-width: 320px) {
    width: 15%;
  } */
`;

export const SelectInput = styled(Select)`
  margin: 32px 0 0 0;
`;
