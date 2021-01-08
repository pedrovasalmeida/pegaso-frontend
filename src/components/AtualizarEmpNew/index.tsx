import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Preloader, ThreeDots } from 'react-preloader-icon';

import {
  Container,
  SelectInput,
  EnterpriseDetails,
  Title,
  Text,
  PreviewDiv,
  PreviewImage,
  UploadInput,
  Button,
  StatusMessageDiv,
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

const AtualizarEmpNew: React.FC = () => {
  const [enterprises, setEnterprise] = useState<Enterprise[] | null>(null);
  const [singleEnterprise, setSingleEnterprise] = useState<ResponseAPI | null>(
    null,
  );
  const [enterpriseId, setEnterpriseId] = useState<number | null>(null);
  const [files, setFiles] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const token = localStorage.getItem('@ProjPegaso:token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getEnterprises = async () => {
    const { data } = await api.get('/show-all');

    if (!data) return setEnterprise(null);

    setEnterprise(data);
  };

  const getDataFromOneEnterprise = async (id) => {
    const { data } = await api.get(`/show-one/${id}`);

    setSingleEnterprise(data);
  };

  const options = enterprises?.map((proj) => ({
    value: proj.id,
    label: proj.nome,
  }));

  const handleInputChange = (option) => {
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
        let formData = new FormData();

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
      let formData = new FormData();

      files.forEach((file) => {
        formData.append('images', file);
      });

      const { data } = await api.post('/storage-many-images', formData);

      let images: any = [];

      data.links.forEach((link) => {
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

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      border: '1px solid #333',
      color: state.isSelected ? '#fff' : '#324286',
      background: state.isSelected ? '#5264b3' : '#fff',
      fontWeight: 'bold',
      borderRadius: '2px',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      border: '1px solid #fff',
      borderRadius: '4px',
      outline: 0,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  if (!enterprises)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '30vh',
        }}
      >
        <Preloader
          use={ThreeDots}
          size={120}
          strokeWidth={6}
          strokeColor="#324286"
          duration={2000}
        />
      </div>
    );

  return (
    <Container>
      <SelectInput
        styles={customStyles}
        options={options}
        placeholder={
          <div>
            <span>Empreendimentos...</span>
          </div>
        }
        onChange={(option) => handleInputChange(option)}
      />

      {singleEnterprise ? (
        <>
          <EnterpriseDetails>
            <Title>{singleEnterprise?.development.nome}</Title>
            <Text>{singleEnterprise?.development.descricao}</Text>

            {singleEnterprise.images.length > 0 ? (
              <>
                {singleEnterprise.images.length > 10 ? (
                  <>
                    <Text>
                      O empreendimento possui{' '}
                      <strong>mais de 10 imagens</strong> cadastradas. Por isso,
                      o preview está desativado.
                    </Text>
                    <Text>
                      Total de imagens:{' '}
                      <strong>{singleEnterprise.images.length}</strong>
                    </Text>
                  </>
                ) : (
                  <>
                    <Text>Imagens existentes:</Text>
                    <PreviewDiv>
                      {singleEnterprise.images.map((image) => (
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
                )}
              </>
            ) : (
              <Text>O empreendimento não possui imagens cadastradas.</Text>
            )}
          </EnterpriseDetails>

          <EnterpriseDetails>
            <form encType="multipart/form-data">
              {loading && (
                <StatusMessageDiv status="loading">
                  <Preloader
                    use={ThreeDots}
                    size={40}
                    strokeWidth={6}
                    strokeColor="#324286"
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
              <Text style={{ margin: 0, padding: 0 }}>
                Selecione a(s) imagem(ns)
              </Text>
              :
              <UploadInput
                name="images"
                id="images"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                multiple
                onChange={(e) => handleAddFileListToArray(e.target.files)}
              />
              <Button
                type="button"
                value="Adicionar Imagens"
                onClick={() => handleUploadImages(enterpriseId!)}
              />
            </form>
          </EnterpriseDetails>
        </>
      ) : (
        <Text style={{ fontWeight: 'bold' }}>
          Selecione um dos empreendimentos disponíveis acima!
        </Text>
      )}
    </Container>
  );
};

export default AtualizarEmpNew;
