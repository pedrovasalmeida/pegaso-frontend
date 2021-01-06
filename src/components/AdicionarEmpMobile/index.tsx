import React, { useState } from 'react';
import { Preloader, ThreeDots } from 'react-preloader-icon';
import api from '../../services/api';

import {
  Form,
  Title,
  Input,
  UploadInput,
  TextArea,
  DivDetalhes,
  DivDireita,
  DivImagens,
  DivButton,
  UploadButton,
  LinkMessage,
  Separator,
  ModalSuccess,
  ModalText,
  ModalButton,
  CloseIcon,
} from './styles';

interface EmpreendimentoData {
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

const AddEk: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const [uploaded, setUploaded] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputDescricao, setInputDescricao] = useState('');
  const [inputDescCurta, setInputDescCurta] = useState('');
  const [inputEndereco, setInputEndereco] = useState('');
  const [linkBanner, setLinkBanner] = useState('');
  const [linkPoster, setLinkPoster] = useState('');
  const [isBannerLoading, setIsBannerLoading] = useState(false);
  const [isPosterLoading, setIsPosterLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem('@ProjPegaso:token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
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
        return setLinkBanner(res.data.link);
      })
      .catch(err => err);
  };

  const fileUploadPosterHandler = async () => {
    setIsPosterLoading(true);
    const formdata = new FormData();

    if (file === null) return alert('file is empty');

    formdata.append('image', file!);

    await api
      .post('/storage-images', formdata)
      .then(res => {
        setIsPosterLoading(false);
        return setLinkPoster(res.data.link);
      })
      .catch(err => err);
  };

  const verifyAndSendData = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (!inputName)
      return alert('O nome do empreendimento não pode estar vazio!');
    if (!inputDescricao)
      return alert('A descrição do empreendimento não pode estar vazia!');
    if (!inputDescCurta)
      return alert('A descrição curta do empreendimento não pode estar vazia!');
    if (!inputEndereco)
      return alert('O endereço do empreendimento não pode estar vazio!');
    if (!linkBanner)
      return alert('O banner do empreendimento não pode estar vazio!');
    if (!linkPoster)
      return alert('O poster do empreendimento não pode estar vazio!');

    setIsLoading(true);

    const data = {
      nome: inputName,
      descricao_curta: inputDescCurta,
      descricao: inputDescricao,
      endereco: inputEndereco,
      banner: linkBanner,
      poster: linkPoster,
    };

    await api
      .post('/create', data, config)
      .then(res => {
        setUploaded(true);
        return setIsLoading(false);
      })
      .catch(err => console.log(err));
  };

  const handleCloseModal = () => {
    setUploaded(false);
    window.location.reload();
  };

  return (
    <Form>
      <>
        <Title>Adicionar Empreendimento</Title>
      </>
      {uploaded && (
        <ModalSuccess>
          <CloseIcon onClick={() => handleCloseModal()} />
          <ModalText>Empreendimento criado com sucesso!</ModalText>
          <ModalButton
            type="button"
            value="Confirmar"
            onClick={() => handleCloseModal()}
          />
        </ModalSuccess>
      )}
      {/* {uploaded && ()} */}

      {/* {modalOpen && (
        <ModalSuccess>
          <CloseIcon onClick={() => handleCloseModal()} />
          <ModalText>Empreendimento criado com sucesso!</ModalText>
          <ModalButton
            type="button"
            value="Confirmar"
            onClick={() => handleCloseModal()}
          />
        </ModalSuccess>
      )} */}

      <DivDetalhes>
        <Input
          type="text"
          id="emp-name"
          placeholder="Nome do empreendimento"
          onChange={e => handleInputs(e.target.value, 'nome')}
        />
        <TextArea
          id="emp-descricao"
          placeholder="Descrição (detalhes)"
          onChange={e => handleInputs(e.target.value, 'descricao')}
        />
        <Input
          id="emp-descricao_curta"
          type="text"
          placeholder="Curta descrição (2 ou 3 palavras)"
          onChange={e => handleInputs(e.target.value, 'descricao_curta')}
        />
        <Input
          id="emp-endereco"
          type="text"
          placeholder="Endereço"
          onChange={e => handleInputs(e.target.value, 'endereco')}
        />
        {/* <Input
          type="text"
          value={linkBanner}
          disabled
          placeholder="Link do banner"
        />
        <Input
          type="text"
          value={linkPoster}
          disabled
          placeholder="Link do poster"
        /> */}
        {isLoading && (
          <Preloader
            use={ThreeDots}
            size={70}
            strokeColor="#324286"
            strokeWidth={6}
            duration={1000}
          />
        )}
      </DivDetalhes>

      <Separator />

      <DivDireita>
        <DivImagens>
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
              value="Upload"
              onClick={() => fileUploadBannerHandler()}
            />
            <label>Banner</label>
          </form>

          {linkBanner ? (
            <LinkMessage>{`Link: ${linkBanner}`}</LinkMessage>
          ) : (
            <>
              {isBannerLoading ? (
                <Preloader
                  use={ThreeDots}
                  size={70}
                  strokeColor="#324286"
                  strokeWidth={6}
                  duration={1000}
                />
              ) : (
                <LinkMessage>Link: Upload ainda não realizado</LinkMessage>
              )}
            </>
          )}
          {/* {linkBanner ? (
            <LinkMessage>{'Link: ' + linkBanner}</LinkMessage>
          ) : (
            <LinkMessage>Link: Upload ainda não realizado</LinkMessage>
          )} */}

          <form encType="multipart/form-data">
            <UploadInput
              name="image"
              id="image"
              type="file"
              whatImageType="poster"
              onChange={e => handleSubmitImage(e.target.files)}
            />
            <UploadButton
              type="button"
              value="Upload"
              onClick={() => fileUploadPosterHandler()}
            />
            <label>Poster</label>
          </form>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {linkPoster ? (
              <LinkMessage>{`Link: ${linkPoster}`}</LinkMessage>
            ) : (
              <>
                {isPosterLoading ? (
                  <Preloader
                    use={ThreeDots}
                    size={70}
                    strokeColor="#324286"
                    strokeWidth={6}
                    duration={1000}
                  />
                ) : (
                  <LinkMessage>Link: Upload ainda não realizado</LinkMessage>
                )}
              </>
            )}
            <LinkMessage style={{ marginTop: '24px' }}>
              O link aparecerá automaticamente nos campos 'Link' à esquerda.
            </LinkMessage>
          </div>
        </DivImagens>
        <DivButton>
          <button onClick={e => verifyAndSendData(e)}>
            Criar Empreendimento
          </button>
        </DivButton>
      </DivDireita>
    </Form>
  );
};

export default AddEk;
