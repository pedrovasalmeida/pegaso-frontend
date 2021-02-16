import React, { useState, useCallback, PropsWithChildren, ReactNode } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSwipeable } from 'react-swipeable';

// import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Preloader, ThreeDots } from 'react-preloader-icon';
import useAxios from '../../hooks/useAxios';

import {
  Carousel,
  Container,
  Imagem,
  FloatDiv,
  FloatContent,
  FloatButton,
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

interface ComponentProps {
  enterprise: any;
}

const CarouselDenner: React.FC<ComponentProps> = ({ enterprise }) => {
  const [sliding, setSliding] = useState(0);
  const dir = 'NEXT';

  const handleNext = useCallback(() => {
    if (sliding !== enterprise.length - 1) {
      setSliding(sliding + 1);
    } else {
      setSliding(0);
    }
  }, [sliding, setSliding, enterprise]);

  const handleBack = useCallback(() => {
    if (sliding !== 0) {
      setSliding(sliding - 1);
    } else {
      setSliding(enterprise.length - 1);
    }
  }, [sliding, setSliding, enterprise]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      {enterprise ? (
        <Carousel {...handlers} style={{ cursor: 'grab' }}>
          {enterprise.map(item => (
            <Container
              key={item.id}
              sliding={sliding}
              dir={dir}
              onClick={() => console.log('evento clique')}
            >
              <Imagem src={item.banner} alt={item.nome} />
            </Container>
          ))}

          <FloatDiv>
            <FloatContent>
              <div>
                <p>{enterprise[sliding].nome}</p>
                <span>{enterprise[sliding].descricao_curta}</span>
              </div>
              <DivIcons>
                <LeftArrow onClick={() => handleBack()} />
                <RightArrow onClick={() => handleNext()} />
              </DivIcons>
            </FloatContent>
            <Link to={`/obras/detalhes/${enterprise[sliding].id}`}>
              <FloatButton>
                <span>Clique aqui para conferir</span>
              </FloatButton>
            </Link>
          </FloatDiv>
        </Carousel>
      ) : (
        <div
          style={{
            display: 'flex',
            marginTop: '150px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh',
          }}
        >
          <Preloader
            use={ThreeDots}
            size={120}
            strokeWidth={6}
            strokeColor="#262626"
            duration={2000}
          />
        </div>
      )}
    </>
  );
};
export default CarouselDenner;
