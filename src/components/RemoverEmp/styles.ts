import styled from 'styled-components';
import { shade } from 'polished';

import { MdClose, MdErrorOutline } from 'react-icons/md';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { BsArrowBarRight } from 'react-icons/bs';
import { FaRegSadTear } from 'react-icons/fa';

import { Preloader } from 'react-preloader-icon';

interface ModalButtonProps {
  modalType?: string;
  fullWidth?: boolean;
  isError?: boolean;
}

interface DivLoadingProps {
  isLoading?: boolean;
}

export const Container = styled.div`
  width: 90%;
`;

export const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DivItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;

  margin: 8px 4px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 16px 4px;
  /* position: relative; */

  /* width: 360px;
  height: 100px; */
`;

export const Separator = styled.div`
  width: 80%;
  height: 1px;

  border-radius: 16px;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const DivButtons = styled.div`
  display: flex;
  width: 80%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 24px;
  width: 100%;

  border: 1px solid white;
  border-radius: 16px;

  margin: 16px 0;

  font-weight: 400;

  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2));

  transition: all 300ms ease-in-out;

  > svg {
    transition: all 300ms ease-in-out;
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    transition: all 300ms ease-in-out;

    color: #fdfdfd;
    background-color: ${shade(0.2, `rgba(192, 25, 32, 1)`)};

    > svg {
      transition: all 300ms ease-in-out;

      color: #fdfdfd;
    }
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
  top: 20%;
  right: 2%;

  border-radius: 50%;

  background-color: rgba(255, 255, 255, 0.1);
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

export const ConfirmModal = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  height: 170px;

  padding: 16px;

  top: 25%;
  left: 35%;

  background-color: #fdfdfd;
  border-radius: 16px;

  border: 1px solid #fff;
  position: absolute;

  filter: drop-shadow(0px 0px 4px #333);

  z-index: 10;
`;

export const ModalText = styled.span``;

export const CloseIcon = styled(MdClose)`
  font-size: 32px;
  color: #333;

  position: absolute;
  top: 16px;
  right: 16px;

  cursor: pointer;
`;

export const CloseIconButton = styled(MdClose)`
  font-size: 18px;
  color: #333;
`;

export const DivModalText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

export const DivModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalButton = styled.button<ModalButtonProps>`
  height: 40px;
  width: ${(props) => (props.fullWidth ? '100%' : '196px')};

  border-radius: 16px;

  background-color: ${(props) =>
    props.modalType === 'cancel'
      ? `${shade(0.2, 'rgb(192, 25, 32)')}`
      : `${shade(0.2, 'green')}`};

  transition: all 300ms ease-in-out;
  &:focus {
    outline: 0;
  }

  &:hover {
    transition: all 300ms ease-in-out;

    background-color: ${(props) =>
      props.modalType === 'cancel'
        ? `${shade(0.6, 'rgb(192, 25, 32)')}`
        : `${shade(0.6, 'green')}`};

    > span {
      transition: all 300ms ease-in-out;

      color: ${shade(0.1, '#fdfdfd')};
    }
  }

  > span {
    color: #fdfdfd;
    font-size: 20px;
  }
`;

export const ModalErrorButton = styled.button<ModalButtonProps>`
  height: 40px;
  width: ${(props) => (props.fullWidth ? '100%' : '196px')};

  border-radius: 16px;

  background-color: ${(props) =>
    props.isError ? `${shade(0.2, 'rgba(192, 25, 32, 1)')}` : ``};

  transition: all 300ms ease-in-out;
  &:focus {
    outline: 0;
  }

  &:hover {
    transition: all 300ms ease-in-out;

    background-color: ${(props) =>
      props.isError ? `${shade(0.6, 'rgba(192, 25, 32, 1)')}` : ``};

    > span {
      transition: all 300ms ease-in-out;

      color: ${shade(0.1, '#fdfdfd')};
    }
  }

  > span {
    color: #fdfdfd;
    font-size: 20px;
  }
`;

export const ConfirmedModal = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  height: 170px;

  padding: 16px;

  top: 25%;
  left: 35%;

  background-color: #fdfdfd;
  border-radius: 16px;

  border: 1px solid #fff;
  position: absolute;

  filter: drop-shadow(0px 0px 4px #333);

  z-index: 10;
`;

export const ErrorModal = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  height: auto;

  padding: 16px;

  top: 25%;
  left: 35%;

  background-color: #fdfdfd;
  border-radius: 16px;

  border: 1px solid #fff;
  position: absolute;

  filter: drop-shadow(0px 0px 4px #333);

  z-index: 10;
`;

export const ErrorIcon = styled(MdErrorOutline)`
  font-size: 64px;

  color: ${shade(0.2, 'rgba(192, 25, 32, 1)')};
`;

export const ConfirmIcon = styled(IoMdCheckmarkCircleOutline)``;

export const ModalErrorText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivLoading = styled.div<DivLoadingProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    text-transform: uppercase;
  }
`;

export const CustomPreloader = styled(Preloader)`
  margin: 16px 0;
`;

export const SadFaceIcon = styled(FaRegSadTear)`
  font-size: 64px;

  margin: 16px;

  color: ${shade(0.4, 'rgba(192, 25, 32, 1)')};
`;
