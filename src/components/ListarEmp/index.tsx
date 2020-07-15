import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import {
  Container,
  Lista,
  Item,
  ArrowIcon,
  DivIcon,
  Avatar,
  Data,
  Nome,
  Descricao,
} from "./styles";

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

  const getData = async () => {
    const response = await api.get("/show-all");

    if (!response.data) return alert("NADA");

    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Lista>
        {!data ? (
          <p>Carregando...</p>
        ) : (
          data?.map((item) => (
            <Item key={item.id}>
              <Avatar src={item.banner} alt={item.nome} />
              <Data>
                <Nome>{item.nome}</Nome>
                <Descricao>{item.descricao}...</Descricao>
                <Nome>ID: {item.id}</Nome>
              </Data>

              <DivIcon>
                <Link to={`/empreendimentos/detalhes/${item.id}`}>
                  <ArrowIcon />
                </Link>
              </DivIcon>
            </Item>
          ))
        )}
      </Lista>
    </Container>
  );
};

export default ListarEmp;
