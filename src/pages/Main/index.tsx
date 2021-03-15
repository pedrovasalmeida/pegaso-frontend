import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSwipeable } from 'react-swipeable';

import { Preloader, ThreeDots } from 'react-preloader-icon';

import Footer from '../../components/Footer';

import api from '../../services/api';

import {
  Carousel,
  Container,
  Imagem,
  FloatDiv,
  FloatContent,
  FloatButton,
  ErrorMessage,
  DivIcons,
  LeftArrow,
  RightArrow,
} from './styles';

interface Empreendimentos {
  id: number;
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

const Main: React.FC = () => {
  const [sliding, setSliding] = useState(0);
  const [dir] = useState('NEXT');
  const [loading, setLoading] = useState(true);
  const [hasData, setHasData] = useState(false);
  const [results, setResults] = useState<any>(null);

  const getData = async () => {
    const dataFromLocalStorage = localStorage.getItem('@ProjPegaso:enterpriseData');

    if (dataFromLocalStorage) {
      setResults(JSON.parse(dataFromLocalStorage));
      setHasData(true);
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
          setHasData(true);
          setLoading(false);
        })
        .catch(err => {
          setHasData(false);
          setLoading(false);
        });
    }
  };

  const handleNext = useCallback(() => {
    if (sliding !== results.length - 1) {
      setSliding(sliding + 1);
    } else {
      setSliding(0);
    }
  }, [sliding, setSliding, results]);

  const handleBack = useCallback(() => {
    if (sliding !== 0) {
      setSliding(sliding - 1);
    } else {
      setSliding(results.length - 1);
    }
  }, [sliding, setSliding, results]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '95vh',
          }}
        >
          <Preloader
            use={ThreeDots}
            size={120}
            strokeWidth={6}
            strokeColor="#0e6387"
            duration={1000}
          />
        </div>
      ) : (
        <>
          {!hasData ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '95vh',
              }}
            >
              <ErrorMessage>
                Ainda não possuimos empreendimentos cadastrados!
              </ErrorMessage>
            </div>
          ) : (
            <Carousel {...handlers} style={{ cursor: 'grab' }}>
              {results.map(item => (
                <Container key={item.id} sliding={sliding} dir={dir}>
                  <Imagem src={item.banner} alt={item.nome} />
                </Container>
              ))}

              <FloatDiv>
                <FloatContent>
                  <div>
                    <p>{results[sliding].nome}</p>
                    <span>{results[sliding].descricao_curta}</span>
                  </div>
                  <DivIcons>
                    <LeftArrow size={50} onClick={() => handleBack()} />
                    <RightArrow size={50} onClick={() => handleNext()} />
                  </DivIcons>
                </FloatContent>
                <Link to={`/obras/detalhes/${results[sliding].id}`}>
                  <FloatButton>
                    <span>Clique aqui para conferir</span>
                  </FloatButton>
                </Link>
              </FloatDiv>
            </Carousel>
          )}
        </>
      )}
      <Footer />
    </>
  );
};
export default Main;
