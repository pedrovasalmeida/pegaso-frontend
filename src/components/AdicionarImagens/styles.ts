import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

import Select from 'react-select';

interface PreviewDivProps {
  numberImages?: number;
}

interface StatusMessageProp {
  status: 'error' | 'loading' | 'success';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: calc(100vh - 104px);
  height: auto;
  width: 100%;

  padding: 8px;

  background-color: #fff;
`;

export const SelectInput = styled(Select)`
  margin-top: 8px;
  align-self: center;

  width: 40%;

  color: ${props => shade(0.6, props.theme.colors.light.lightBlue)};
  border: 1px solid ${props => shade(0.4, props.theme.colors.light.lightBlue)};
  border-radius: 4px;

  /* div {
    color: ${shade(0.7, '#fff')};
    white-space: nowrap;
    text-overflow: ellipsis;

    line-height: 26px;

    &:hover {
      background: red;
    }

    span {
      border-bottom: 1px solid #000;
    } */

  @media only screen and (max-width: 1400px) {
    width: 70%;
  }
  @media only screen and (max-width: 912px) {
    width: 100%;
  }
`;

export const EnterpriseDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  position: relative;

  width: auto;
  height: 55vh;

  border-radius: 4px;

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 394px) {
    padding: 8px;
  }
`;

export const FilesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  position: relative;

  width: auto;
  height: auto;

  border-radius: 4px;

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 394px) {
    padding: 8px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const Text = styled.span`
  font-size: 16px;
  color: #333;

  line-height: 30px;

  margin: 4px 0;

  strong {
    font-weight: bold;
  }
`;

export const PreviewDiv = styled.div<PreviewDivProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 50%;
  height: 100%;

  overflow-y: scroll;

  margin-bottom: 8px;

  @media only screen and (max-width: 777px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 367px) {
    max-width: 100%;
  }
`;

export const PreviewImage = styled.img`
  width: 100px;
  height: 100px;

  border: 1px solid #000;
  border-radius: 4px;

  margin: 1px 2px;
`;

export const UploadInput = styled.input`
  width: 100%;
  height: 32px;

  overflow: hidden;

  cursor: pointer;

  border: 1px solid ${props => shade(0.4, props.theme.colors.light.lightBlue)};
  border-radius: 4px;

  ::-webkit-file-upload-button {
    visibility: hidden;
  }

  -webkit-writing-mode: horizontal-tb !important;

  transition: all 300ms ease;
`;

export const Button = styled.input`
  width: 100%;
  height: 50px;

  font-size: 18px;

  ${props =>
    props.disabled
      ? css`
          background: ${props.theme.colors.light.gray};
        `
      : css`
          background: ${props.theme.colors.light.lightBlue};

          &:hover {
            transition: background 300ms ease;
            background: ${lighten(0.1, props.theme.colors.light.lightBlue)};
          }
        `}

  color: #fdfdfd;

  border-radius: 4px;

  margin: 8px 0;
  padding: 4px;

  transition: all 300ms ease;

  &:focus {
    outline: 0;
  }
`;

export const StatusMessageDiv = styled.div<StatusMessageProp>`
  position: absolute;
  bottom: 4%;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  border-radius: 4px;

  padding: 4px;

  z-index: 1;

  ${props =>
    props.status === 'error' &&
    css`
      background: rgba(192, 25, 32, 1);
    `}
  ${props =>
    props.status === 'loading' &&
    css`
      background: #fff;
    `}
  ${props =>
    props.status === 'success' &&
    css`
      background: #32c019;
    `}

  span {
    font-weight: bold;
    font-size: 16px;

    z-index: 2;

    color: #fff;
  }
`;
