import React, { useEffect, useState } from 'react';
import { Preloader, ThreeDots } from 'react-preloader-icon';
import Footer from '../../components/Footer';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import api from '../../services/api';

import {
  Container,
  DivTitle,
  Subtitle,
  ErrorMessage,
  DivProjects,
  Project,
  FullImage,
  FloatDiv,
  FloatDivMobile,
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

const ProjectsMobile: React.FC = () => {
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isArray, setIsArray] = useState<boolean | undefined>(undefined);

  const getData = async () => {
    const dataFromLocalStorage = localStorage.getItem('@ProjPegaso:enterpriseData');

    if (dataFromLocalStorage) {
      setResults(JSON.parse(dataFromLocalStorage));
      setIsArray(true);
      setLoading(false);

      const response = await api.get('/show-all');

      if (
        JSON.stringify(response.data) !== dataFromLocalStorage &&
        response.status === 200
      ) {
        localStorage.setItem('@ProjPegaso:enterpriseData', JSON.stringify(response.data));
        setResults(response.data);
      }
    } else {
      api
        .get('/show-all')
        .then(res => {
          setResults(res.data);
          localStorage.setItem('@ProjPegaso:enterpriseData', JSON.stringify(res.data));
          setIsArray(true);
          setLoading(false);
        })
        .catch(err => {
          setIsArray(false);
          setLoading(false);
          console.log(err);
        });
    }
  };

  const { width } = useWindowDimensions();

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (results !== null) {
      localStorage.setItem('@ProjPegaso:enterpriseData', JSON.stringify(results));
    }
  }, [results]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <>
      <Container>
        <DivTitle
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {width < 459 ? (
            <Subtitle>
              NOSSAS
              <br />
              OBRAS
            </Subtitle>
          ) : (
            <Subtitle>NOSSAS OBRAS</Subtitle>
          )}
        </DivTitle>

        <DivProjects>
          {loading ? (
            <Preloader
              use={ThreeDots}
              size={120}
              strokeWidth={6}
              strokeColor="#0e6387"
              duration={800}
            />
          ) : (
            <>
              {!isArray ? (
                <ErrorMessage>
                  Ainda não possuímos empreendimentos cadastrados!
                </ErrorMessage>
              ) : (
                results.map(item => {
                  return (
                    <LinkRRD to={`/obras/detalhes/${item.id}`} key={item.id}>
                      <Project
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        whileHover={{
                          y: -5,
                          filter: 'drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.4))',
                          transition: { duration: 0.5 },
                        }}
                      >
                        <FullImage width={width}>
                          <img src={item.banner} alt={item.nome} />
                        </FullImage>

                        {width < 586 ? (
                          <FloatDivMobile
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={{ duration: 0.25 }}
                          >
                            <p>{item.descricao_curta}</p>
                            <p>{item.nome}</p>
                          </FloatDivMobile>
                        ) : (
                          <FloatDiv
                            whileTap={{
                              scale: 0.95,
                            }}
                            initial="hidden"
                            animate="visible"
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
                        )}

                        <FloatDiv
                          whileTap={{
                            scale: 0.95,
                          }}
                          initial="hidden"
                          animate="visible"
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
            </>
          )}
        </DivProjects>
      </Container>
      <Footer />
    </>
  );
};

export default ProjectsMobile;
