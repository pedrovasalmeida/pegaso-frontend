import React, { useEffect, useState } from 'react';
import {
  IoIosEye,
  IoIosEyeOff,
  IoIosCloseCircle,
  IoIosRemoveCircle,
} from 'react-icons/io';

import { toast, ToastContainer } from 'react-toastify';

import api from '../../services/api';

import {
  Container,
  PageTitle,
  EnterpriseSelector,
  EnterprisesContainer,
  RemoveImagesContainer,
  ImagesContainer,
  Image,
  ToogleButtonContainer,
} from './styles';

interface Enterprise {
  id: number;
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

interface Image {
  id: number;
  id_empreendimento: number;
  imagem: string;
  name: string;
}

interface ImageProps {
  message: string;
  images: Image[];
  development: Enterprise;
}

const token = localStorage.getItem('@ProjPegaso:token');

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const RemoverImagens: React.FC = () => {
  const [enterprises, setEnterprise] = useState<Enterprise[] | null>(null);
  const [enterpriseId, setEnterpriseId] = useState<number | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [oneEnterpriseData, setOneEnterpriseData] = useState<ImageProps | null>(null);
  const [isEnterpriseDataShowing, setIsEnterpriseDataShowing] = useState(true);
  const [listOfImagesIdToDelete, setListOfImagesIdToDelete] = useState<number[]>([]);

  const options = enterprises?.map(proj => ({
    value: proj.id,
    label: proj.nome,
  }));

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#0e6387',
      background: state.isSelected ? '#0e6387' : '#fff',
      fontWeight: 'bold',
      padding: '1rem 0.75rem',
      borderRadius: '2px',
    }),
    control: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      display: 'flex',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      flexDirection: 'row',
      width: '100%',
      fontSize: '0.8rem',
      color: state.isSelected ? '#fff' : '#0e6387',
      border: '1px solid #0e6387',
      borderRadius: '4px',
      outline: 0,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  const handleInputChange = option => {
    setEnterpriseId(option.value);
  };

  const getEnterprises = async () => {
    setIsLoadingData(true);
    const { data } = await api.get('/show-all');

    if (!data) {
      setEnterprise(null);
      setIsLoadingData(true);
      return;
    }

    setIsLoadingData(false);
    setEnterprise(data);
  };

  const getDataFromOneEnterprise = async id => {
    const { data } = await api.get(`/show-one/${id}`);

    setOneEnterpriseData(data);
  };

  const handleEntepriseDataShown = () => {
    setIsEnterpriseDataShowing(prevState => !prevState);
  };

  const handleAddImageToRemoveList = (id: number) => {
    const findedId = listOfImagesIdToDelete.includes(id);

    if (!findedId) {
      setListOfImagesIdToDelete([...listOfImagesIdToDelete, id]);
      return;
    }

    console.log(`Imagem existe?: ${findedId}`);

    const newListOfImagesWithoutThisImage = listOfImagesIdToDelete.filter(
      image_id => image_id !== id,
    );

    setListOfImagesIdToDelete(newListOfImagesWithoutThisImage);
  };

  const handleRemoveImageFromListByIcon = (id: number) => {
    const newListWithoutThisId = listOfImagesIdToDelete.filter(
      image_id => image_id !== id,
    );

    setListOfImagesIdToDelete(newListWithoutThisId);
  };

  const handleSendImagesToDestroy = async () => {
    if (!enterpriseId) {
      toast.error('Erro ao remover imagem');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return;
    }

    toast.warn('Excluindo imagens. Aguarde...');

    const { status } = await api.delete(`/delete-many-images/${enterpriseId}`, {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        ids: listOfImagesIdToDelete,
      },
    });

    if (status !== 200) {
      toast.error('Erro ao remover imagens');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return;
    }

    toast.success('Imagens removidas com sucesso');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    getEnterprises();
  }, []);

  useEffect(() => {
    if (enterpriseId) getDataFromOneEnterprise(enterpriseId);
  }, [enterpriseId]);

  return (
    <Container>
      <PageTitle>Remover imagens</PageTitle>
      <EnterpriseSelector
        options={options}
        styles={customStyles}
        onChange={option => handleInputChange(option)}
        placeholder="Escolha a obra para remover imagens..."
      />

      {oneEnterpriseData && (
        <ToogleButtonContainer
          onClick={handleEntepriseDataShown}
          className="show-hidden-proj"
        >
          {isEnterpriseDataShowing ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}

          <span>{isEnterpriseDataShowing ? 'Esconder' : 'Mostrar'} todas as imagens</span>
        </ToogleButtonContainer>
      )}

      {listOfImagesIdToDelete.length > 0 && (
        <ToogleButtonContainer onClick={handleSendImagesToDestroy}>
          <button className="remove-images-btn" type="button">
            <IoIosRemoveCircle size={20} />
            Remover imagens selecionadas
          </button>
        </ToogleButtonContainer>
      )}

      {isEnterpriseDataShowing && (
        <EnterprisesContainer>
          {oneEnterpriseData && (
            <>
              {oneEnterpriseData.images.length > 0 ? (
                <>
                  {listOfImagesIdToDelete.length > 0 ? (
                    <>
                      <h1>{listOfImagesIdToDelete.length} imagens selecionadas</h1>
                      <h1>{oneEnterpriseData.images.length} imagens no total</h1>
                    </>
                  ) : (
                    <>
                      <h1>Selecione as imagens que deseja remover</h1>
                      <h1>{oneEnterpriseData.images.length} imagens no total</h1>
                    </>
                  )}
                  <ImagesContainer>
                    {oneEnterpriseData.images.map(enterprise => (
                      <div key={enterprise.id}>
                        <Image
                          onClick={() => handleAddImageToRemoveList(enterprise.id)}
                          src={enterprise.imagem}
                          alt={enterprise.imagem}
                          isSelected={listOfImagesIdToDelete.includes(enterprise.id)}
                        />
                        {listOfImagesIdToDelete.length > 0 &&
                          listOfImagesIdToDelete.find(id => id === enterprise.id) && (
                            <IoIosCloseCircle
                              size={45}
                              onClick={() =>
                                handleRemoveImageFromListByIcon(enterprise.id)
                              }
                            />
                          )}
                      </div>
                    ))}
                  </ImagesContainer>
                </>
              ) : (
                <span>A obra não possui imagens cadastradas.</span>
              )}
            </>
          )}
        </EnterprisesContainer>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </Container>
  );
};

export default RemoverImagens;
