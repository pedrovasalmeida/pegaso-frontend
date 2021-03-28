import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

import Select from 'react-select';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-width: 95vw;
  min-height: calc(100vh - 104px);

  @media only screen and (min-width: 731px) {
    min-width: calc(95vw - 260px);
  }
  @media only screen and (min-width: 1070px) {
    min-width: auto;
    width: 70vw;
    max-width: 70vw;
  }
`;

export const PageTitle = styled.span`
  font-weight: bold;
  font-size: 34px;

  @media only screen and (max-width: 770px) {
    font-size: 24px;
  }
`;

export const EnterpriseSelector = styled(Select)`
  width: 50%;
  z-index: 2;
  @media only screen and (max-width: 1004px) {
    max-width: 100%;
    width: 90%;
  }
`;

export const EnterprisesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  min-height: 300px;

  > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

  @media only screen and (min-width: 300px) {
    > h1 {
      width: 100%;
      max-width: ;
    }
  }
  @media only screen and (min-width: 600px) {
    > h1 {
      max-width: 500px;
    }
  }
`;

export const RemoveImagesContainer = styled.div``;

export const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: justify;

  > div {
    position: relative;
    > svg {
      position: absolute;
      right: 0;
      z-index: 1;
      color: ${shade(0.4, 'red')};
      cursor: pointer;
    }
  }
`;

interface ImageProps {
  isSelected: boolean;
}

export const Image = styled.img<ImageProps>`
  max-height: 7rem;
  max-width: 100%;
  margin: 1rem;

  border: 2px solid #000;
  border-radius: 12%;

  transition: filter 300ms ease;

  cursor: pointer;

  ${p =>
    p.isSelected &&
    css`
      filter: brightness(0.8);
      filter: saturate(0);
    `}

  @media only screen and (min-width: 730px) {
    &:hover {
      filter: saturate(0);
    }
  }
`;

export const ToogleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem 0;
  padding: 0.25rem 0;

  cursor: pointer;

  &.show-hidden-proj {
    background: ${p => p.theme.colors.light.darkBlue};
    border-radius: 8px;
    color: #fff;
    font-weight: bold;

    padding: 0.5rem;

    > svg {
      margin-right: 0.5rem;
      color: #fff;
    }
  }

  .remove-images-btn {
    padding: 1rem;
    color: #fff;
    font-weight: bold;
    border-radius: 8px;

    background: ${p => p.theme.colors.light.lightBlue};

    transition: filter 300ms ease;

    > svg {
      margin-right: 0.5rem;
      color: #fff;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
