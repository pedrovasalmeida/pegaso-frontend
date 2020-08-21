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

const AtualizarEmp: React.FC = () => {
  const [data, setData] = useState<EmpreendimentoData[] | null>(null);
  const [inputValue, setInputValue] = useState(null);
  const [enterpriseData, setEnterpriseData] = useState<Enterprise | null>(null);

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
        {data && (
          <SelectInput
            options={options}
            placeholder="Selecione um empreendimento..."
            onChange={(option) => handleInputChange(option)}
          />
        )}

        {enterpriseData ? (
          <UpdateContainer>
            <span>ID: {enterpriseData.development.id}</span>
            <span>{enterpriseData.development.nome}</span>
            <span>{enterpriseData.development.descricao}</span>
            <span>{enterpriseData.development.descricao_curta}</span>
          </UpdateContainer>
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
