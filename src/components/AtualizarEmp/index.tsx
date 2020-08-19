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

const AtualizarEmp: React.FC = () => {
  const [data, setData] = useState<EmpreendimentoData[] | null>(null);

  const getData = async () => {
    const { data, error } = await api.get('/show-all');

    if (error) return setData(null);

    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const options = data?.map((proj) => ({
    value: proj.id,
    label: proj.nome,
  }));

  return (
    <Container>
      <Lista>
        <SelectInput options={options} />
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
