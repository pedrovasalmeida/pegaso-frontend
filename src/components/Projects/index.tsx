import React from 'react';

import useAxios from '../../hooks/useAxios';

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
  const { results } = useAxios('/show-all');
  let counter = 0.4;

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <Container>
      <DivTitle animate={{ x: -650 }} transition={{ duration: 1.2 }}>
        <Subtitle>NOSSOS EMPREENDIMENTOS</Subtitle>
      </DivTitle>

      <DivProjects>
        {!results ? (
          <p>Carregando...</p>
        ) : (
          results.map((item) => {
            counter = counter + 0.1;
            return (
              <LinkRRD
                to={`/empreendimentos/detalhes/${item.id}`}
                key={item.id}
              >
                <Project
                  animate={{ x: -350 }}
                  transition={{ duration: counter }}
                  whileHover={{
                    y: -7,
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))',
                  }}
                >
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
                    transition={{ duration: 0.25 }}
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
