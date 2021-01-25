import React, { useState, useEffect } from 'react';

import { Preloader, ThreeDots } from 'react-preloader-icon';
import api from '../../services/api';

import {
  Container,
  SelectInput,
  EnterpriseDetails,
  FilesDiv,
  Title,
  Text,
  PreviewDiv,
  PreviewImage,
  UploadInput,
  Button,
  StatusMessageDiv,
  TitlePage,
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

interface ResponseAPI {
  message: string;
  images: any[];
  development: Enterprise;
}

const AdicionarImagens: React.FC = () => {
  const [enterprises, setEnterprise] = useState<Enterprise[] | null>(null);
  const [singleEnterprise, setSingleEnterprise] = useState<ResponseAPI | null>(null);
  const [enterpriseId, setEnterpriseId] = useState<number | null>(null);
  const [files, setFiles] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [loadingData, setLoadingData] = useState(true);

  const token = localStorage.getItem('@ProjPegaso:token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      border: '1px solid #333',
      color: state.isSelected ? '#f2f2f2' : '#0e6387',
      background: state.isSelected ? '#0e6387' : '#f2f2f2',
      fontWeight: 'bold',
      borderRadius: '2px',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      border: '1px solid #f2f2f2',
      borderRadius: '4px',
      outline: 0,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  const options = enterprises?.map(proj => ({
    value: proj.id,
    label: proj.nome,
  }));

  const getEnterprises = async () => {
    setLoadingData(true);
    const { data } = await api.get('/show-all');

    if (!data) {
      setEnterprise(null);
      setLoadingData(false);
      return;
    }

    setEnterprise(data);
    setLoadingData(false);
  };

  const getDataFromOneEnterprise = async id => {
    const { data } = await api.get(`/show-one/${id}`);

    setSingleEnterprise(data);
  };

  const handleInputChange = option => {
    setEnterpriseId(option.value);
  };

  const handleAddFileListToArray = (e?: FileList | null) => {
    if (e && e.length > 0) {
      setFiles(Array.from(e));
    } else {
      setFiles([]);
    }
  };

  const handleUploadImages = async (id: number) => {
    setLoading(true);
    setError(false);
    setSuccess(false);
    setStatusMessage('');

    if (files.length < 1) {
      setError(true);
      setLoading(false);
      setSuccess(false);
      setStatusMessage('Nenhum arquivo selecionado!');

      setTimeout(() => {
        setError(false);
      }, 2000);

      return;
    }

    if (files.length === 1) {
      setError(false);
      setSuccess(false);

      try {
        const formData = new FormData();

        formData.append('image', files[0]);

        const { data } = await api.post('/storage-images', formData);

        const imageLink = data.link;

        const sendedData = {
          id_empreendimento: id,
          imagem: imageLink,
        };

        await api.post(`/create-image`, sendedData, config);

        const response = await api.get(`/show-one/${id}`);
        setSingleEnterprise(response.data);

        setError(false);
        setLoading(false);
        setSuccess(true);
        setStatusMessage('Imagem cadastrada com sucesso!');

        setTimeout(() => {
          setSuccess(false);
        }, 2000);

        return;
      } catch (err) {
        setLoading(false);
        setError(true);
        setSuccess(false);
        setStatusMessage('Ocorreu um erro. Tente novamente!');

        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    }

    try {
      const formData = new FormData();

      files.forEach(file => {
        formData.append('images', file);
      });

      const { data } = await api.post('/storage-many-images', formData);

      const images: any = [];

      data.links.forEach(link => {
        images.push(link);
      });

      const sendedData = {
        imageLinks: images,
      };

      await api.post(`/create-images/${id}`, sendedData, config);

      const response = await api.get(`/show-one/${id}`);
      setSingleEnterprise(response.data);

      setLoading(false);
      setError(false);
      setSuccess(true);
      setStatusMessage('Imagens cadastradas com sucesso!');

      setTimeout(() => {
        setSuccess(false);
      }, 2000);

      return;
    } catch (err) {
      setLoading(false);
      setError(true);
      setSuccess(false);
      setStatusMessage('Ocorreu um erro. Tente novamente!');

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    getEnterprises();
  }, []);

  useEffect(() => {
    if (enterpriseId) getDataFromOneEnterprise(enterpriseId);
  }, [enterpriseId]);

  return (
    <Container>
      <TitlePage>Adicionar Imagens</TitlePage>
      {loadingData ? (
        <StatusMessageDiv status="loading">
          <Preloader
            use={ThreeDots}
            size={40}
            strokeWidth={6}
            strokeColor="#0e6387"
            duration={2000}
          />
        </StatusMessageDiv>
      ) : (
        <>
          <SelectInput
            styles={customStyles}
            options={options}
            placeholder="Empreendimentos..."
            onChange={option => handleInputChange(option)}
          />
          {singleEnterprise && (
            <>
              <EnterpriseDetails>
                <Title>{singleEnterprise?.development.nome}</Title>
                <Text>{singleEnterprise?.development.descricao}</Text>

                {singleEnterprise?.images.length > 0 ? (
                  <>
                    <Text>
                      Imagens existentes (
                      <strong>{singleEnterprise?.images.length}</strong> no total):
                    </Text>
                    <PreviewDiv>
                      {singleEnterprise?.images.map(image => (
                        <a
                          key={image.imagem}
                          href={image.imagem}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <PreviewImage src={image.imagem} alt={image.nome} />
                        </a>
                      ))}
                    </PreviewDiv>
                  </>
                ) : (
                  <Text>O empreendimento não possui imagens cadastradas.</Text>
                )}
              </EnterpriseDetails>

              <FilesDiv>
                <form encType="multipart/form-data">
                  {loading && (
                    <StatusMessageDiv status="loading">
                      <Preloader
                        use={ThreeDots}
                        size={40}
                        strokeWidth={6}
                        strokeColor="#0e6387"
                        duration={2000}
                      />
                    </StatusMessageDiv>
                  )}
                  {success && (
                    <StatusMessageDiv status="success">
                      <span>{statusMessage}</span>
                    </StatusMessageDiv>
                  )}
                  {error && (
                    <StatusMessageDiv status="error">
                      <span>{statusMessage}</span>
                    </StatusMessageDiv>
                  )}
                  <Text style={{ margin: 0, padding: 0 }}>Selecione a(s) imagem(ns)</Text>
                  :
                  <UploadInput
                    name="images"
                    id="images"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    multiple
                    onChange={e => handleAddFileListToArray(e.target.files)}
                  />
                  <Button
                    disabled={files.length < 1}
                    type="button"
                    value="Adicionar Imagens"
                    onClick={() => handleUploadImages(enterpriseId!)}
                  />
                </form>
              </FilesDiv>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default AdicionarImagens;
