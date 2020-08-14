import styled from 'styled-components';
import { shade, lighten } from 'polished';

interface InputProps {
  disabled?: boolean;
  whatImageType?: string;
}

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  position: relative;

  width: 50vw;
  height: auto;

  margin: 24px 0 0 0;
  padding: 16px 16px 120px 16px;

  border: 1px solid ${lighten(0.4, '#324286')};
  border-radius: 16px;

  @media (max-width: 1639px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1281px) {
    padding: 16px 16px 200px 16px;
  }
`;

export const DivDetalhes = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 16px 0 0;
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

export const UploadInput = styled.input<InputProps>`
  width: 352px;
  height: 32px;

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

  width: 352px;
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

export const DivButton = styled.div`
  position: absolute;
  bottom: 4vh;
  left: 13vw;

  button {
    width: 352px;
    height: 40px;

    outline: 0;

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
    left: 13vw;
  }

  @media (max-width: 1281px) {
    bottom: 16vh;
    left: 11vw;
  }
`;

export const UploadButton = styled.input`
  width: 100px;
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
