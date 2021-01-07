import styled from 'styled-components';
import { shade, lighten } from 'polished';

import { TiDelete } from 'react-icons/ti';

interface InputProps {
  disabled?: boolean;
  whatImageType?: string;
}

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 80%;
  height: auto;

  padding: 16px 10px 0 10px;

  background: #fff;

  border-radius: 4px;

  @media only screen and (max-width: 1281px) {
    padding: 20px;
  }

  @media only screen and (max-width: 730px) {
    width: 100%;
  }
`;

export const DivDetalhes = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  @media only screen and (max-width: 1475px) {
    width: 90%;
  }

  @media only screen and (max-width: 1120px) {
    width: 100%;
  }

  @media only screen and (max-width: 830px) {
    width: 100%;
  }
`;

export const Input = styled.input<InputProps>`
  position: relative;

  width: 100%;
  height: 50px;

  font-size: 18px;

  color: ${shade(0.6, '#324286')};
  background: #f2f2f2;

  border: 1px solid ${shade(0.4, '#f2f2f2')};
  border-radius: 4px;

  margin: 8px 0;
  padding: 16px;

  transition: all 300ms ease;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};

  &::placeholder {
    color: ${shade(0, 'rgba(50, 66, 134, 0.6)')};
  }

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? `${lighten(0.55, '#324286')}`
        : `${lighten(0.6, '#324286')}`};
  }

  &:focus {
    transition: border 300ms ease;
    border: 1px solid ${lighten(0.1, `#324286`)};
    filter: drop-shadow(0px 0px 1px ${lighten(0.1, '#324286')});
  }
`;

export const UploadInput = styled.input<InputProps>`
  width: 100%;
  height: 32px;

  overflow: hidden;

  color: ${shade(0.4, '#324286')};

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};

  border: 1px solid ${shade(0.4, `#324286`)};
  border-radius: 4px;

  background-color: ${(props) =>
    props.disabled
      ? `${lighten(0.55, '#324286')}`
      : `${lighten(0.62, '#324286')}`};

  ::-webkit-file-upload-button {
    visibility: hidden;
  }

  -webkit-writing-mode: horizontal-tb !important;

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

export const TextArea = styled.textarea`
  resize: none;

  width: 100%;
  height: 250px;

  font-size: 18px;

  color: ${shade(0.6, '#324286')};
  background: #f2f2f2;

  margin: 8px 0;
  padding: 16px;

  border: 1px solid ${shade(0.4, `#324286`)};
  border-radius: 4px;

  transition: all 300ms ease;

  &:hover {
    background-color: ${lighten(0.6, '#324286')};
  }

  &:focus {
    border: 1px solid ${shade(0.4, `#324286`)};
    filter: drop-shadow(0px 0px 2px ${lighten(0.4, `#324286`)});
  }
`;

export const DivDireita = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const DivImagens = styled.div`
  form {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 450px;

    padding: 0 0 0 16px;
    margin: 16px 0;

    /* background-color: ${lighten(0.62, '#324286')}; */

    /* border: 1px solid ${lighten(0.2, '#324286')}; */
    border-radius: 8px;

    label {
      position: absolute;
      left: 32px;
      z-index: 1;
    }
  }
`;

export const CreateButton = styled.button`
  margin: 4px 0;

  outline: 0;
  width: 100%;
  height: 50px;

  background: #324286;
  color: #fdfdfd;

  border: 1px solid #324286;
  border-radius: 4px;

  margin: 8px 0;
  padding: 0 16px;

  font-weight: bold;
  font-size: 18px;

  transition: background 300ms ease;

  svg {
    margin-right: 8px;
  }

  &:hover {
    transition: background 300ms ease;
    background: ${lighten(0.1, `#324286`)};
  }

  &:focus {
    outline: 0;
  }

  @media (max-width: 1639px) {
    bottom: 8vh;
    left: 13vw;
  }

  @media (max-width: 1281px) {
    bottom: 16vh;
    left: 11vw;
  }
`;

export const UploadButton = styled.input`
  width: 100%;
  height: 50px;

  font-size: 18px;

  color: ${shade(0.6, '#324286')};
  background: #f2f2f2;

  border: 1px solid ${shade(0.4, '#f2f2f2')};
  border-radius: 4px;

  margin: 8px 0;
  padding: 16px;

  transition: all 300ms ease;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
`;

export const LinkMessage = styled.span`
  font-weight: 500;
  color: ${shade(0.1, '#324286')};
`;

export const Separator = styled.div`
  align-self: center;
  width: 1px;
  height: 95%;

  margin: 0 32px;

  background-color: ${lighten(0.5, '#324286')};

  @media (max-width: 1639px) {
    display: none;
  }
`;

export const ModalSuccess = styled.div`
  position: absolute;

  left: 25%;
  top: 75%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8px;

  width: 450px;
  height: 150px;

  border: 1px solid #324286;
  border-radius: 16px;

  background-color: ${lighten(0.61, '#324286')};

  z-index: 2;
`;

export const ModalText = styled.span``;

export const ModalButton = styled.input`
  align-self: center;

  width: 100px;
  height: 32px;

  outline: 0;

  margin: 8px 0 0 0;

  color: #324286;

  border: 1px solid #324286;
  border-radius: 8px;
  /* border-top-width: 0;
  border-bottom-width: 0; */

  transition: all 300ms ease;

  &:hover {
    color: #fff;
    font-weight: bold;
    background-color: ${lighten(0.2, '#324286')};
    border: 0px solid #324286;
  }
`;

export const CloseIcon = styled(TiDelete)`
  position: absolute;
  right: 8px;
  top: 8px;

  font-size: 24px;

  cursor: pointer;
`;

export const DivPreloader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100px;
`;

export const PreviewDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: auto;
  height: auto;

  padding-left: 10px;

  span:not(:first-child) {
    margin-top: 12px;
  }
`;

export const PreviewImage = styled.img`
  width: 150px;
  height: 150px;

  margin: 0 8px;

  border-radius: 4px;

  border: 2px solid ${shade(0.8, '#f2f2f2')};
`;
