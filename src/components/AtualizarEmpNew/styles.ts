import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

import Select from 'react-select';

interface InputProps {
  disabled?: boolean;
  whatImageType?: string;
}

interface PreviewDivProps {
  numberImages?: number;
}

interface StatusMessageProp {
  status: 'error' | 'loading' | 'success';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  width: 100%;

  min-height: calc(100vh - 64px);
  height: auto;

  padding: 16px;
`;

export const SelectInput = styled(Select)`
  margin-top: 32px;
  align-self: center;

  width: 50%;

  color: ${shade(0.6, '#324286')};
  border: 1px solid ${shade(0.4, '#324286')};
  border-radius: 4px;

  @media (max-width: 1049px) {
    width: 80%;
  }
  @media (max-width: 414px) {
    width: 80%;
  }
`;

export const EnterpriseDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: auto;
  height: auto;

  padding: 32px;
  margin: 16px 0;

  border: 1px solid ${lighten(0.6, '#324286')};
  border-radius: 4px;

  form {
    position: relative;
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
`;

export const PreviewDiv = styled.div<PreviewDivProps>`
  width: 100%;
  max-width: 50%;
  height: auto;

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

  border: 1px solid ${shade(0.4, `#324286`)};
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

  color: ${shade(0.6, '#324286')};
  background: #f2f2f2;

  border: 1px solid ${shade(0.4, '#f2f2f2')};
  border-radius: 4px;

  margin: 8px 0;
  padding: 16px;

  transition: all 300ms ease;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
`;

export const StatusMessageDiv = styled.div<StatusMessageProp>`
  position: absolute;
  bottom: 5%;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  border-radius: 4px;

  padding: 4px;

  z-index: 1;

  ${(props) =>
    props.status === 'error' &&
    css`
      background: rgba(192, 25, 32, 1);
    `}
  ${(props) =>
    props.status === 'loading' &&
    css`
      background: #fff;
    `}
  ${(props) =>
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
