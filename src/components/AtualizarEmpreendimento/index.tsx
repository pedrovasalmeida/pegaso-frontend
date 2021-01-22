import React, { useState, useEffect } from 'react';

import { Preloader, ThreeDots } from 'react-preloader-icon';
import api from '../../services/api';

import {
  Form,
  FormDiv,
  Input,
  UploadInput,
  TextArea,
  DivDetalhes,
  CreateButton,
  UploadButton,
  DivPreloader,
  PreviewImage,
  PreviewDiv,
  StatusMessageDiv,
  Title,
  SelectInput,
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

const AtualizarEmpreendimento: React.FC = () => {
  // estado para arquivos
  const [file, setFile] = useState<File | null>(null);
  // estado dos inputs
  const [inputName, setInputName] = useState('');
  const [inputDescricao, setInputDescricao] = useState('');
  const [inputDescCurta, setInputDescCurta] = useState('');
  const [inputEndereco, setInputEndereco] = useState('');
  const [linkBanner, setLinkBanner] = useState('');
  // estados informativos
  const [isBannerLoading, setIsBannerLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingEnterpriseData, setLoadingEnterpriseData] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const [allEnterprises, setAllEnterprises] = useState<Enterprise[] | undefined>(
    undefined,
  );
  const [selectedDataId, setSelectedDataId] = useState<number | undefined>(undefined);
  const [oneEnterpriseData, setOneEnterpriseData] = useState<Enterprise | undefined>(
    {} as Enterprise,
  );
  const [newBannerLink, setNewBannerLink] = useState('');

  const token = localStorage.getItem('@ProjPegaso:token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      border: '1px solid #333',
      color: state.isSelected ? '#fff' : '#0e6387',
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

  const options = allEnterprises?.map(proj => ({
    value: proj.id,
    label: proj.nome,
  }));

  const getAllEnterprises = () => {
    api
      .get('/show-all')
      .then(res => {
        setAllEnterprises(res.data);
      })
      .catch(err => {
        console.log(err);
        setAllEnterprises(undefined);
      });
  };

  const getDataFromOneEnterprise = (id: number) => {
    setLoadingEnterpriseData(true);

    api
      .get(`/show-one/${id}`)
      .then(res => {
        setOneEnterpriseData(res.data.development);
        setLoadingEnterpriseData(false);
      })
      .catch(err => {
        setOneEnterpriseData(undefined);
        setLoadingEnterpriseData(false);
        console.log(err);
      });
  };

  const handleInputChange = option => {
    setSelectedDataId(option.value);
  };

  const handleInputs = (e: string, type: string) => {
    if (type === 'nome') setInputName(e);
    if (type === 'descricao') setInputDescricao(e);
    if (type === 'descricao_curta') setInputDescCurta(e);
    if (type === 'endereco') setInputEndereco(e);
  };

  const handleSubmitImage = (e: FileList | null) => {
    if (e && e.length > 0) setFile(e[0]);
  };

  const fileUploadBannerHandler = async () => {
    setIsBannerLoading(true);
    const formdata = new FormData();

    if (file === null) return alert('file is empty');

    formdata.append('image', file!);

    await api
      .post('/storage-images', formdata)
      .then(res => {
        setIsBannerLoading(false);
        setNewBannerLink(res.data.link);
      })
      .catch(err => {
        setIsBannerLoading(false);
        setNewBannerLink('');
        return err;
      });
  };

  const verifyAndSendData = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    setError(false);
    setStatusMessage('');

    if (!inputName) {
      setInputName(oneEnterpriseData!.nome);
    }

    if (!inputDescricao) {
      setInputDescricao(oneEnterpriseData!.descricao);
    }
    if (!inputDescCurta) {
      setInputDescCurta(oneEnterpriseData!.descricao_curta);
    }
    if (!inputEndereco) {
      setInputEndereco(oneEnterpriseData!.endereco);
    }

    const data = {
      nome: inputName,
      descricao_curta: inputDescCurta,
      descricao: inputDescricao,
      endereco: inputEndereco,
      banner: newBannerLink.length < 2 ? linkBanner : newBannerLink,
      poster: newBannerLink.length < 2 ? linkBanner : newBannerLink,
    };

    await api
      .put(`/update/${selectedDataId}`, data, config)
      .then(res => {
        setSuccess(true);
        setError(false);
        setIsLoading(false);
        setStatusMessage('Empreendimento atualizado com sucesso!');

        setTimeout(() => {
          setSuccess(false);
          window.location.reload();
        }, 2000);

        setIsLoading(false);
      })
      .catch(err => {
        setError(true);
        setSuccess(false);
        setIsLoading(false);
        setStatusMessage(`Erro: ${err.message}`);

        setTimeout(() => {
          setError(false);
        }, 2000);
      });
  };

  useEffect(() => {
    getAllEnterprises();
  }, []);

  useEffect(() => {
    if (selectedDataId) {
      getDataFromOneEnterprise(selectedDataId);
    }
  }, [selectedDataId]);

  useEffect(() => {
    if (oneEnterpriseData) {
      setInputName(oneEnterpriseData.nome);
      setInputDescricao(oneEnterpriseData.descricao);
      setInputDescCurta(oneEnterpriseData.descricao_curta);
      setInputEndereco(oneEnterpriseData.endereco);
      setLinkBanner(oneEnterpriseData.banner);
    }
  }, [oneEnterpriseData]);

  return (
    <>
      <Title>Atualizar empreendimento</Title>

      <SelectInput
        styles={customStyles}
        options={options}
        placeholder="Empreendimentos..."
        onChange={option => handleInputChange(option)}
      />

      {loadingEnterpriseData && (
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
            strokeColor="#0e6387"
            duration={2000}
          />
        </div>
      )}
      <>
        {oneEnterpriseData?.nome && (
          <FormDiv>
            <DivDetalhes>
              <Form>
                <Input
                  type="text"
                  id="emp-name"
                  placeholder={
                    oneEnterpriseData ? oneEnterpriseData.nome : 'Nome do empreendimento'
                  }
                  onChange={e => handleInputs(e.target.value, 'nome')}
                />
                <TextArea
                  id="emp-descricao"
                  placeholder={
                    oneEnterpriseData
                      ? oneEnterpriseData.descricao
                      : 'Descrição (detalhes)'
                  }
                  onChange={e => handleInputs(e.target.value, 'descricao')}
                />
                <Input
                  id="emp-descricao_curta"
                  type="text"
                  placeholder={
                    oneEnterpriseData
                      ? oneEnterpriseData.descricao_curta
                      : 'Curta descrição (2 ou 3 palavras)'
                  }
                  onChange={e => handleInputs(e.target.value, 'descricao_curta')}
                />
                <Input
                  id="emp-endereco"
                  type="text"
                  placeholder={
                    oneEnterpriseData ? oneEnterpriseData.endereco : 'Endereço'
                  }
                  onChange={e => handleInputs(e.target.value, 'endereco')}
                />
              </Form>

              <span>Selecione um arquivo para ser o Banner do empreendimento:</span>
              <form encType="multipart/form-data">
                <UploadInput
                  name="image"
                  id="image"
                  type="file"
                  whatImageType="banner"
                  onChange={e => handleSubmitImage(e.target.files)}
                />

                <UploadButton
                  type="button"
                  value="Enviar banner"
                  onClick={() => fileUploadBannerHandler()}
                />
              </form>

              {newBannerLink.length > 1 ? (
                <>
                  <Input
                    type="text"
                    value={`NOVO LINK:     ${newBannerLink}`}
                    disabled
                    placeholder="Link do banner"
                  />
                  <PreviewDiv>
                    <span>Novo Banner: </span>
                    <a href={newBannerLink} target="_blank" rel="noreferrer noopener">
                      <PreviewImage src={newBannerLink} alt={newBannerLink} />
                    </a>
                  </PreviewDiv>
                </>
              ) : (
                <>
                  {isBannerLoading ? (
                    <DivPreloader>
                      <Preloader
                        use={ThreeDots}
                        size={70}
                        strokeColor="#0e6387"
                        strokeWidth={6}
                        duration={1000}
                      />
                    </DivPreloader>
                  ) : (
                    <>
                      <Input
                        type="text"
                        value={linkBanner}
                        disabled
                        placeholder="Link do banner"
                      />
                      {linkBanner && (
                        <PreviewDiv>
                          <span>Banner Antigo: </span>
                          <a href={linkBanner} target="_blank" rel="noreferrer noopener">
                            <PreviewImage src={linkBanner} alt={linkBanner} />
                          </a>
                        </PreviewDiv>
                      )}
                    </>
                  )}
                </>
              )}

              {isLoading && (
                <StatusMessageDiv status="loading">
                  <Preloader
                    use={ThreeDots}
                    size={70}
                    strokeColor="#0e6387"
                    strokeWidth={6}
                    duration={1000}
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

              <CreateButton onClick={e => verifyAndSendData(e)}>
                Atualizar Informações
              </CreateButton>
            </DivDetalhes>
          </FormDiv>
        )}
      </>
    </>
  );
};

export default AtualizarEmpreendimento;
