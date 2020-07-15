import React, { useState, useEffect } from "react";
import api from "../../services/api";

import {
  Container,
  Form,
  Input,
  TextArea,
  DivDetalhes,
  DivImagens,
  Separator,
} from "./styles";

import { Alert } from "reactstrap";

interface EmpreendimentoData {
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

const StoreData: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const [uploaded, setUploaded] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputDescricao, setInputDescricao] = useState("");
  const [inputDescCurta, setInputDescCurta] = useState("");
  const [inputEndereco, setInputEndereco] = useState("");
  const [linkBanner, setLinkBanner] = useState(
    "https://i.imgur.com/6g8I5Cz.png"
  );
  const [linkPoster, setLinkPoster] = useState(
    "https://i.imgur.com/WhfrhVz.png"
  );
  const [finalData, setFinalData] = useState({} as EmpreendimentoData);

  const handleInputs = (e: string, type: string) => {
    if (type === "nome") setInputName(e);
    if (type === "descricao") setInputDescricao(e);
    if (type === "descricao_curta") setInputDescCurta(e);
    if (type === "endereco") setInputEndereco(e);
  };

  const handleSubmitImage = (e: FileList | null) => {
    if (e && e.length > 0) setFile(e[0]);
  };

  const handleFileUpload = async (type: string) => {
    let formData = new FormData();

    if (file === null) return alert("Your file is empty!");

    formData.append("image", file!);

    if (type === "banner") {
      return await api
        .post("/storage-images")
        .then((res) => console.log(res.data.link))
        .catch((err) => err);
    }

    if (type === "poster") {
      return await api
        .post("/storage-images")
        .then((res) => console.log(res.data.link))
        .catch((err) => err);
    }
  };

  const fileUploadBannerHandler = async () => {
    let formdata = new FormData();

    if (file === null) return alert("file is empty");

    formdata.append("image", file!);

    await api
      .post("/storage-images", formdata)
      .then((res) => setLinkBanner(res.data.link))
      .catch((err) => err);
  };

  const fileUploadPosterHandler = async () => {
    let formdata = new FormData();

    if (file === null) return alert("file is empty");

    formdata.append("image", file!);

    await api
      .post("/storage-images", formdata)
      .then((res) => setLinkPoster(res.data.link))
      .catch((err) => err);
  };

  const doUpload = async (data: EmpreendimentoData) => {};

  const verifyAndSendData = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!inputName)
      return alert("O nome do empreendimento não pode estar vazio!");
    if (!inputDescricao)
      return alert("A descrição do empreendimento não pode estar vazia!");
    if (!inputDescCurta)
      return alert("A descrição curta do empreendimento não pode estar vazia!");
    if (!inputEndereco)
      return alert("O endereço do empreendimento não pode estar vazio!");
    if (!linkBanner)
      return alert("O banner do empreendimento não pode estar vazio!");
    if (!linkPoster)
      return alert("O poster do empreendimento não pode estar vazio!");

    const data = {
      nome: inputName,
      descricao: inputDescricao,
      descricao_curta: inputDescCurta,
      endereco: inputEndereco,
      banner: linkBanner,
      poster: linkPoster,
    };

    await api
      .post("/create", data)
      .then((res) => setUploaded(true))
      .catch((err) => console.log(err));
  };

  const isUploaded = () => <p>Empreendimento criado com sucesso!</p>;

  useEffect(() => {}, []);

  return (
    <Container>
      <Form>
        <DivDetalhes>
          <Input
            type="text"
            id="emp-name"
            placeholder="Nome do empreendimento"
            onChange={(e) => handleInputs(e.target.value, "nome")}
          />
          <TextArea
            id="emp-descricao"
            placeholder="Descrição (detalhes)"
            onChange={(e) => handleInputs(e.target.value, "descricao")}
          />
          <Input
            id="emp-descricao_curta"
            type="text"
            placeholder="Curta descrição (2 ou 3 palavras)"
            onChange={(e) => handleInputs(e.target.value, "descricao_curta")}
          />
          <Input
            id="emp-endereco"
            type="text"
            placeholder="Endereço"
            onChange={(e) => handleInputs(e.target.value, "endereco")}
          />
          <Input
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
          />
          <button onClick={(e) => verifyAndSendData(e)}>
            Criar Empreendimento
          </button>

          {uploaded && isUploaded()}
        </DivDetalhes>

        <Separator />

        <DivImagens>
          <form encType="multipart/form-data">
            <span>Banner</span>
            <Input
              name="image"
              id="image"
              type="file"
              onChange={(e) => handleSubmitImage(e.target.files)}
            />
            <Input
              type="button"
              value="Upload"
              onClick={() => fileUploadBannerHandler()}
            />
            {linkBanner && <p>{linkBanner}</p>}
          </form>

          <form encType="multipart/form-data">
            <span>Poster</span>
            <Input
              name="image"
              id="image"
              type="file"
              onChange={(e) => handleSubmitImage(e.target.files)}
            />
            <Input
              type="button"
              value="Upload"
              onClick={() => fileUploadPosterHandler()}
            />
            {linkPoster && <p>{linkPoster}</p>}
          </form>
        </DivImagens>
      </Form>
    </Container>
  );
};

export default StoreData;
