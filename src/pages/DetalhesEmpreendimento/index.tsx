import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useSwipeable } from 'react-swipeable';

/** Componentes */
import MyLoading from '../../components/MyLoading';
import Footer from '../../components/Footer';

import api from '../../services/api';

import {
  Container,
  Details,
  Title,
  Box,
  Text,
  MoreImages,
  DivImagemTipo,
  BackButton,
  BackIcon,
  MyCarousel,
  CarouselContainer,
  Imagem,
  LeftArrow,
  RightArrow,
} from './styles';

interface EnterpriseProps {
  development: {
    id: number;
    nome: string;
    descricao_curta: string;
    descricao: string;
    endereco: string;
    banner: string;
    poster: string;
  };
  images: {
    id: number;
    id_empreendimento: number;
    imagem: string;
    name: string;
  }[];
}

const DetalhesEmpreendimento: React.FC = () => {
  // return <DetalhesProjeto />;
  const history = useHistory();
  const { id } = useParams();

  const [enterprise, setEnterprise] = useState<EnterpriseProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselOptions = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    afterChange: index => updateCurrentSlide(index),
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  function handlePrev() {
    setCurrentSlide(prevState => (prevState - 1 < 0 ? 0 : prevState));
  }

  function handleNext() {
    setCurrentSlide(prevState =>
      prevState + 1 > enterprise!.images.length ? 0 : prevState + 1,
    );
  }

  function updateCurrentSlide(index: number) {
    setCurrentSlide(prevState => (prevState !== index ? index : prevState));
  }

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await api.get(`/show-one/${id}`);

      if (response.status !== 200) {
        setEnterprise(null);
        setLoading(false);

        return (
          <h1>
            Não foi possivel carregar os dados da obra. Por favor, atualize a página para
            tentar novamente!
          </h1>
        );
      }

      setEnterprise(response.data);
      setLoading(false);
    };

    getData();
  }, [id]);

  return (
    <>
      <Container>
        {enterprise !== null && enterprise && (
          <>
            <DivImagemTipo url={enterprise?.development.banner} />
            <BackButton type="button" onClick={() => history.goBack()}>
              <BackIcon size={20} />
              <span>Voltar</span>
            </BackButton>

            <Details>
              <Box>
                <Title>{enterprise.development.nome}</Title>
                <Text>{enterprise.development.descricao}</Text>
              </Box>

              <Box>
                <Title>Endereço</Title>
                <Text>{enterprise.development.endereco}</Text>
              </Box>
            </Details>

            {enterprise && enterprise.images.length > 0 ? (
              <div style={{ position: 'relative' }}>
                <MyCarousel {...carouselOptions}>
                  {enterprise.images.map(item => (
                    // eslint-disable-next-line react/jsx-key
                    <img src={item.imagem} alt={item.name} />
                  ))}
                </MyCarousel>
              </div>
            ) : (
              <>
                {loading ? (
                  <MyLoading />
                ) : (
                  <div className="no-data">
                    <span>
                      Ainda não temos imagens cadastradas para essa obra! <br /> :(
                    </span>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default DetalhesEmpreendimento;
