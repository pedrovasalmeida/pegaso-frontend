import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {
  Container,
  Input,
  Lista,
  DivDados,
  ArrowIcon,
  DivIcon,
  Avatar,
  Data,
  Nome,
  Descricao,
  SelectInput,
  UpdateContainer,
  Form,
  ButtonContainer,
  Button,
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
  const [inputList, setInputList] = useState<any[]>([
    <Input key={0} type="text" placeholder="Link da imagem" />,
  ]);
  const [inputValueList, setInputValueList] = useState<string[]>([]);

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

  const rendleInput = () => (
    <Input key={inputList.length} type="text" placeholder="Link da imagem" />
  );

  const handleAddInput = () => {
    setInputList([...inputList, rendleInput()]);
  };

  const handleRemoveInput = () => {
    setInputList([<Input key={0} type="text" placeholder="Link da imagem" />]);
    setInputValueList([]);
  };

  const handleInputValue = (index: number, value: string) => {
    let array = [...inputValueList];
    array[index] = value;
    setInputValueList([...array]);
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
            {inputList.map((item, index) => (
              <>
                <Input
                  type="text"
                  value={inputValueList[index]}
                  onChange={(e) => handleInputValue(index, e.target.value)}
                />
                <span>{inputValueList[index]}</span>
              </>
            ))}
            {<span>{inputList.length}</span>}

            <ButtonContainer>
              <Button
                type="button"
                value="Adicionar imagem"
                onClick={() => handleAddInput()}
              />
              <Button
                type="button"
                value="Limpar lista"
                onClick={() => handleRemoveInput()}
              />
            </ButtonContainer>

            <span>ID: {enterpriseData.development.id}</span>
            <span>{enterpriseData.development.nome}</span>
            <span>{enterpriseData.development.descricao}</span>
            <span>{enterpriseData.development.descricao_curta}</span>
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

// return (
//   <Container>
//     <Lista>
//       {!data ? (
//         <span>no data man</span>
//       ) : (
//         data?.map((item) => (
//           <DivDados>
//             <Avatar src={item.banner} alt={item.nome} />
//             <Data>
//               <Nome>{item.nome}</Nome>
//               <Descricao>{item.descricao}...</Descricao>
//               <Nome>ID: {item.id}</Nome>
//             </Data>

//             <DivIcon>
//               <ArrowIcon />
//             </DivIcon>
//           </DivDados>
//         ))
//       )}
//     </Lista>
//   </Container>
// );

export default AtualizarEmp;
