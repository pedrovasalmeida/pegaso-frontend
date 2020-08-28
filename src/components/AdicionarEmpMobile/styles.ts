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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 99vw;
  height: auto;

  /* margin: 24px 0 0 0;
  padding: 16px 16px 120px 16px; */
  padding: 36px 0 120px 0;

  border: 1px solid ${lighten(0.4, '#324286')};
  border-radius: 16px;

  /* @media (max-width: 1639px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */

  /* @media (max-width: 1281px) {
    padding: 16px 16px 200px 16px;
  } */
`;

export const Title = styled.span`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 20px;

  margin: 0 0 0 0;
`;

export const DivDetalhes = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 4px;
`;

export const Input = styled.input<InputProps>`
  width: 95vw;

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

export const UploadInput = styled.input<InputProps>`
  width: 70vw;

  color: ${shade(0.4, '#324286')};

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};

  border: 1px solid ${shade(0.4, `#324286`)};
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-width: 0px;

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

  width: 95vw;
  height: 256px;

  color: ${shade(0.4, '#324286')};

  padding: 4px 8px;

  border: 1px solid ${shade(0.4, `#324286`)};
  border-radius: 8px;

  background-color: ${lighten(0.62, '#324286')};

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

    width: 100%;

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

export const DivButton = styled.div`
  button {
    width: 95vw;
    height: 40px;

    outline: 0;

    margin: 16px 0 0 0;
    color: #324286;

    border: 1px solid #324286;
    border-radius: 8px;

    transition: all 300ms ease;

    &:hover {
      color: #fff;
      font-weight: bold;
      background-color: ${lighten(0.2, '#324286')};
      border: 0px solid #324286;
    }
  }

  @media (max-width: 1639px) {
    bottom: 8vh;
    left: 0;
  }

  @media (max-width: 1281px) {
    bottom: 16vh;
    left: 0;
  }
`;

export const UploadButton = styled.input`
  width: 88px;
  height: 32px;

  outline: 0;

  color: #324286;

  border: 1px solid #324286;
  border-radius: 8px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
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

export const LinkMessage = styled.span`
  font-weight: 500;
  color: ${shade(0.1, '#324286')};
  margin: 0 0 0 8px;
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

  left: 2vw;
  bottom: 18vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8px;

  width: 95vw;
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
