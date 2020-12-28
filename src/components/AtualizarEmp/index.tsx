import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Preloader, ThreeDots } from 'react-preloader-icon';

import {
  Container,
  Lista,
  SelectInput,
  UpdateContainer,
  Form,
  Button,
  UploadInput,
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

interface Enterprise {
  message: string;
  images: string[];
  development: EmpreendimentoData;
}

interface InputValueListProps {
  id: number;
  value: string;
}

const AtualizarEmp: React.FC = () => {
  const [data, setData] = useState<EmpreendimentoData[] | null>(null);
  const [inputValue, setInputValue] = useState(null);
  const [enterpriseData, setEnterpriseData] = useState<Enterprise | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  const [files, setFile] = useState<any>([]);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('@ProjPegaso:token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getData = async () => {
    const { data, error } = await api.get('/show-all');

    if (error) return setData(null);

    setData(data);
  };

  const getDataFromOneEnterprise = async (id) => {
    const { data } = await api.get(`/show-one/${id}`);

    setEnterpriseData(data);
  };

  const handleInputChange = (option) => {
    setInputValue(option.value);
  };

  const handleSubmitImage = (e: FileList | null) => {
    if (e && e.length > 0) setFile(Array.from(e));
  };

  const fileUploadImages = async (id) => {
    setLoading(true);
    setError(false);
    let formdata = new FormData();

    if (files.length < 1) return alert('file is empty');

    for (let i = 0; i < files.length; i++) {
      formdata.append('images', files[i]);
    }

    api
      .post('/storage-many-images', formdata)
      .then((res) => {
        let images: any = [];

        res.data.links.forEach((link) => {
          images.push(link);
        });

        setImageLinks([...imageLinks, ...images]);
        setLoading(false);
        setShowConfirmButton(true);
        setMessage('Imagens upadas com sucesso!');
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        setShowConfirmButton(false);
        setMessage('Ocorreu algum erro ao enviar as imagens!');
      });
  };

  const sendDataToApi = async (id) => {
    setLoading(true);

    const data = {
      imageLinks,
    };

    console.log(data);
    console.log(imageLinks);

    await api
      .post(`/create-images/${id}`, data, config)
      .then((res) => {
        setLoading(false);
        setMessage('Imagens cadastradas com sucesso!');
      })
      .catch((err) => {
        setMessage('Ocorreu algum erro!');
        setError(true);
        setLoading(false);
      });
  };

  const options = data?.map((proj) => ({
    value: proj.id,
    label: proj.nome,
  }));

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (inputValue) getDataFromOneEnterprise(inputValue);
  }, [inputValue]);

  return (
    <Container>
      <Lista>
        {data ? (
          <SelectInput
            options={options}
            placeholder="Selecione um empreendimento..."
            onChange={(option) => handleInputChange(option)}
          />
        ) : (
          <span>Não temos empreendimentos ainda! :(</span>
        )}

        {enterpriseData ? (
          <Form>
            <form encType="multipart/form-data">
              <label>Selecione as imagens</label>
              <UploadInput
                name="images"
                id="images"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                multiple
                onChange={(e) => handleSubmitImage(e.target.files)}
              />
              <Button
                type="button"
                value="Upload"
                onClick={() => fileUploadImages(inputValue)}
              />
            </form>

            {error && <span>DEU ERRO DOIDAO!</span>}
            {loading && (
              <>
                <span>Upando imagens...</span>
                <Preloader
                  use={ThreeDots}
                  size={48}
                  strokeColor="#324286"
                  strokeWidth={6}
                  duration={1000}
                />
              </>
            )}
            {message.length > 0 && <span>{message}</span>}
            {showConfirmButton && (
              <Button
                type="button"
                value="Concluir"
                onClick={() => sendDataToApi(inputValue)}
              />
            )}
          </Form>
        ) : (
          <UpdateContainer>
            <span>Selecione um empreendimento acima!</span>
          </UpdateContainer>
        )}
      </Lista>
    </Container>
  );
};

export default AtualizarEmp;
