import React, { useState, useEffect } from 'react';
import { Preloader, ThreeDots } from 'react-preloader-icon';
import api from '../../services/api';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import ListarEmpMobile from '../ListarEmpMobile';

import {
  Container,
  Lista,
  LinkRRD,
  ArrowIcon,
  DivIcon,
  Avatar,
  Data,
  Nome,
  Descricao,
  Title,
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

const ListarEmp: React.FC = () => {
  const [data, setData] = useState<EmpreendimentoData[] | null>(null);
  const [loading, setLoading] = useState(true);

  const { width } = useWindowDimensions();

  const getData = async () => {
    setLoading(true);
    const { data, error } = await api.get('/show-all');

    if (error) {
      setLoading(false);
      return;
    }

    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {width < 910 ? (
        <ListarEmpMobile />
      ) : (
        <Container>
          <Lista>
            <Title>Listar Empreendimentos</Title>
            {loading ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  height: '100vh',
                  width: '100%',
                  marginTop: '100px',
                }}
              >
                <Preloader
                  use={ThreeDots}
                  size={120}
                  strokeWidth={8}
                  strokeColor="#0e6387"
                  duration={800}
                />
              </div>
            ) : (
              <>
                {!data ? (
                  <span>Não existem empreendimentos cadastrados.</span>
                ) : (
                  data?.map(item => (
                    <LinkRRD to={`/empreendimentos/detalhes/${item.id}`} key={item.id}>
                      <Avatar src={item.banner} alt={item.nome} />
                      <Data>
                        <Nome>{item.nome}</Nome>
                        <Descricao>
                          {item.descricao}
                          ...
                        </Descricao>
                        <Nome>
                          ID:
                          {item.id}
                        </Nome>
                      </Data>

                      <DivIcon>
                        <ArrowIcon />
                      </DivIcon>
                    </LinkRRD>
                  ))
                )}
              </>
            )}
          </Lista>
        </Container>
      )}
    </>
  );
};

export default ListarEmp;
