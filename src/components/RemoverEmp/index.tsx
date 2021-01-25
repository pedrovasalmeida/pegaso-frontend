import React, { useState, useEffect } from 'react';
import { Preloader, ThreeDots } from 'react-preloader-icon';
import api from '../../services/api';

import {
  Container,
  Lista,
  Item,
  ArrowIcon,
  DivIcon,
  Avatar,
  Data,
  Nome,
  Descricao,
  Modal,
  CloseIcon,
  Button,
  InfoModal,
  Title,
} from './styles';

interface EmpreendimentoData {
  id: number;
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

const RemoverEmp: React.FC = () => {
  const [data, setData] = useState<EmpreendimentoData[] | null>(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(Number);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const getData = async () => {
    setLoadingData(true);
    const { data, error } = await api.get('/show-all');

    if (error) {
      setLoadingData(false);
      return;
    }

    setData(data);
    setLoadingData(false);
  };

  const token = localStorage.getItem('@ProjPegaso:token');

  const handleConfirmModal = (id: number) => {
    confirmModal ? setConfirmModal(false) : setConfirmModal(true);
    setIdToDelete(id);
  };

  const handleClickOutsite = () => {
    setConfirmModal(false);
    setIsDeleted(false);
  };

  const handleClickOutsiteInfoModal = () => {
    setIsDeleted(false);
    window.location.reload();
  };

  const handleDelete = async id => {
    setIsLoading(true);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await api
      .delete(`/delete/${id}`, config)
      .then(res => {
        setIsDeleted(true);
        setConfirmModal(false);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(err => {
        setIsDeleted(false);
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {isDeleted && (
        <InfoModal>
          <>
            <span>
              {isError
                ? `O empreendimento de ID ${idToDelete} não foi excluído. Tente novamente!`
                : `O empreendimento de ID ${idToDelete} foi excluído com sucesso!`}
            </span>
            <CloseIcon onClick={() => handleClickOutsiteInfoModal()} />
            <div>
              <Button buttonType="confirm" onClick={() => handleClickOutsiteInfoModal()}>
                Confirmar
              </Button>
            </div>
          </>
        </InfoModal>
      )}
      {confirmModal && (
        <Modal>
          {isLoading ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100px',
              }}
            >
              <Preloader
                use={ThreeDots}
                size={80}
                strokeWidth={8}
                strokeColor="#0e6387"
                duration={800}
              />
            </div>
          ) : (
            <>
              <span>Tem certeza que deseja excluir esse empreendimento?</span>
              <span>ID: {idToDelete}</span>
              <CloseIcon onClick={() => handleClickOutsite()} />
              <div>
                <Button buttonType="confirm" onClick={() => handleDelete(idToDelete)}>
                  Confirmar
                </Button>
                <Button buttonType="cancel" onClick={() => handleClickOutsite()}>
                  Cancelar
                </Button>
              </div>
            </>
          )}
        </Modal>
      )}
      <Lista>
        <Title>Remover Empreendimentos</Title>
        {loadingData ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: 'calc(100vh - 104px)',
              width: '100%',
              marginTop: '100px',
            }}
          >
            <Preloader
              use={ThreeDots}
              size={120}
              strokeWidth={8}
              strokeColor="#0e6387"
              duration={800}
            />
          </div>
        ) : (
          <>
            {!data ? (
              <span>Não existem empreendimentos cadastrados.</span>
            ) : (
              data?.map(item => (
                <Item key={item.id}>
                  <Avatar src={item.banner} alt={item.nome} />

                  <Data>
                    <Nome>{item.nome}</Nome>
                    <Descricao>{item.descricao}...</Descricao>
                    <Nome>
                      ID:
                      {item.id}
                    </Nome>
                  </Data>

                  <DivIcon>
                    <ArrowIcon onClick={() => handleConfirmModal(item.id)} />
                  </DivIcon>
                </Item>
              ))
            )}
          </>
        )}
      </Lista>
    </Container>
  );
};

export default RemoverEmp;
