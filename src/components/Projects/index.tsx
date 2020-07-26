import React from 'react';

import useAxios from '../../hooks/useAxios';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import {
  Container,
  DivTitle,
  Subtitle,
  DivProjects,
  Project,
  ExternalImage,
  FullImage,
  FloatDiv,
  FloatContent,
  FloatButton,
  LinkRRD,
} from './styles';

interface Empreendimentos {
  id: number;
  nome: string;
  descricao_curta: string;
  banner: string;
  poster: string;
}

const Projects: React.FC = () => {
  const { data } = useAxios<Empreendimentos[]>('/show-all');

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <Container>
      <DivTitle animate={{ x: -650 }} transition={{ duration: 1.5 }}>
        <Subtitle>NOSSOS EMPREENDIMENTOS</Subtitle>
      </DivTitle>

      <DivProjects animate={{ x: -350 }} transition={{ duration: 3.5 }}>
        {!data ? (
          <p>Carregando...</p>
        ) : (
          data.map((item) => {
            return (
              <LinkRRD to={`/empreendimentos/detalhes/${item.id}`}>
                <Project whileHover={{ y: -10 }}>
                  <ExternalImage>
                    <img src={item.poster} alt={item.nome} />
                  </ExternalImage>
                  <FullImage>
                    <img src={item.banner} alt={item.nome} />
                  </FullImage>
                  <FloatDiv
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    initial="hidden"
                    animate={'visible'}
                    variants={variants}
                    transition={{ duration: 4 }}
                  >
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
              </LinkRRD>
            );
          })
        )}
      </DivProjects>
    </Container>
  );
};

export default Projects;
