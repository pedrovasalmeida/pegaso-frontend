import React from "react";

import useAxios from "../../hooks/useAxios";

import { Link } from "react-router-dom";

import {
  Container,
  DivTitle,
  Title,
  Subtitle,
  DivProjects,
  Project,
  ExternalImage,
  FullImage,
  FloatDiv,
  FloatContent,
  FloatButton,
} from "./styles";

interface Empreendimentos {
  id: number;
  nome: string;
  descricao_curta: string;
  banner: string;
  poster: string;
}

const Projects: React.FC = () => {
  const { data } = useAxios<Empreendimentos[]>("/show-all");

  return (
    <Container>
      <DivTitle>
        <Title>Empreendimentos</Title>
        <Subtitle>Conheça nossos empreendimentos com unidades à venda</Subtitle>
      </DivTitle>

      <DivProjects>
        {!data ? (
          <p>Carregando...</p>
        ) : (
          data.map((item) => {
            return (
              <Link to={`/empreendimentos/detalhes/${item.id}`}>
                <Project>
                  <ExternalImage>
                    <img src={item.poster} alt={item.nome} />
                  </ExternalImage>
                  <FullImage>
                    <img src={item.banner} alt={item.nome} />
                  </FullImage>
                  <FloatDiv>
                    <FloatContent>
                      <div>
                        <span>{item.descricao_curta}</span>
                        <p>{item.nome}</p>
                      </div>
                    </FloatContent>
                    <FloatButton>
                      <span>Clique aqui para conferir</span>
                    </FloatButton>
                  </FloatDiv>
                </Project>
              </Link>
            );
          })
        )}
      </DivProjects>
    </Container>
  );
};

export default Projects;
