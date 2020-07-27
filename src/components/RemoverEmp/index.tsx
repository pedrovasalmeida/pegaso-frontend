import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Preloader, ThreeDots } from 'react-preloader-icon';

import {
  Container,
  Lista,
  ConfirmModal,
  ModalText,
  CloseIcon,
  DivModalText,
  DivModalButtons,
  ModalButton,
  ConfirmedModal,
  ErrorModal,
  ErrorIcon,
  ModalErrorButton,
  ModalErrorText,
  DivLoading,
  CustomPreloader,
  SadFaceIcon,
} from './styles';
import { AxiosResponse } from 'axios';

interface EmpreendimentoData {
  id: number;
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

interface ErrorProps {
  response: {
    data: AxiosResponse<any>;
    status: AxiosResponse<any>;
    headers: AxiosResponse<any>;
  };
}

const RemoverEmp: React.FC = () => {
  const [data, setData] = useState<EmpreendimentoData[] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmedModal, setShowConfirmedModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [empToDelete, setEmpToDelete] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [dataError, setDataError] = useState<boolean>(false);

  // const handleModal = (id: number, name: string) => {
  //   showModal ? setShowModal(false) : setShowModal(true);

  //   setIdToDelete(id);
  //   setEmpToDelete(name);

  //   setShowConfirmedModal(false);
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmedModal = () => {
    setShowConfirmedModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  const handleCloseConfirmedModal = () => {
    setShowConfirmedModal(false);
  };

  const handleCloseErrorModal = () => {
    setIsError(false);
    setShowModal(false);
  };

  const handleError = () => {
    setIsError(true);
    setShowConfirmedModal(false);
  };

  const getData = async () => {
    setIsLoading(true);

    await api
      .get('/show-all')
      .then((res) => {
        setIsLoading(false);
        setDataError(false);
        setData([...data, res.data]);
        return;
      })
      .catch((err) => {
        setIsLoading(false);
        setDataError(true);
        return;
      });
  };

  const removeData = async (id: number) => {
    handleConfirmedModal();
    setIsDeleting(true);

    if (id === null) return alert('ID não existe!');

    await api
      .delete(`/delete/${id}`)
      .then((res) => {
        handleCloseModal();
        setIsDeleting(false);
        return res.data;
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 400) return handleError();
        }
      });
  };

  useEffect(() => {
    getData();
  }, [getData()]);

  return (
    <Container>
      <Lista>
        {showModal && (
          <ConfirmModal>
            <CloseIcon onClick={() => handleCloseModal()} />

            <DivModalText>
              <ModalText>
                Tem certeza que deseja remover:
                <br />
                <strong>ID: {idToDelete}</strong>
                <br />
                <strong>Nome: {empToDelete}</strong>?
              </ModalText>
            </DivModalText>

            <DivModalButtons>
              <ModalButton
                modalType="confirm"
                onClick={() => removeData(idToDelete!)}
              >
                <span>Confirmar</span>
              </ModalButton>

              <ModalButton
                modalType="cancel"
                onClick={() => handleCloseModal()}
              >
                <span>Cancelar</span>
              </ModalButton>
            </DivModalButtons>
          </ConfirmModal>
        )}

        {isError && !showConfirmedModal && (
          <ErrorModal>
            <DivModalText>
              <ModalErrorText>
                <ErrorIcon />
                <span>
                  Não foi possível excluir esse empreendimento, pois ele não
                  existe na base de dados!
                </span>
              </ModalErrorText>
            </DivModalText>
            <ModalErrorButton
              modalType="confirm"
              fullWidth
              isError
              onClick={() => handleCloseErrorModal()}
            >
              <span>Ok</span>
            </ModalErrorButton>
          </ErrorModal>
        )}

        {isLoading && (
          <DivLoading isLoading={isLoading}>
            <CustomPreloader
              use={ThreeDots}
              size={60}
              strokeWidth={6}
              strokeColor="#262626"
              duration={2000}
            />
            <span>Carregando empreendimentos</span>
          </DivLoading>
        )}

        {dataError ? (
          <DivLoading>
            <SadFaceIcon />
            <span>Não possuímos empreendimentos AINDA!</span>
          </DivLoading>
        ) : (
          ''
        )}

        {showConfirmedModal && (
          <ConfirmedModal>
            {isDeleting ? (
              <Preloader
                use={ThreeDots}
                size={60}
                strokeWidth={6}
                strokeColor="#262626"
                duration={2000}
              />
            ) : (
              <DivModalText>
                <ModalText>Empreendimento removido com sucesso!</ModalText>
              </DivModalText>
            )}

            <ModalButton
              modalType="confirm"
              fullWidth
              onClick={() => handleCloseConfirmedModal()}
            >
              <span>Ok</span>
            </ModalButton>
          </ConfirmedModal>
        )}
      </Lista>
    </Container>
  );
};

export default RemoverEmp;
