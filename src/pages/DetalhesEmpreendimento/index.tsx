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
  Carousel,
  CarouselContainer,
  Imagem,
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
  const [openDialog, setOpenDialog] = useState(false);

  const [sliding, setSliding] = useState(0);
  const dir = 'NEXT';

  const handleAlgumaCoisa = () => {
    setOpenDialog(true);
  };

  const handleNext = useCallback(() => {
    if (sliding !== enterprise!.images.length - 1) {
      setSliding(sliding + 1);
    } else {
      setSliding(0);
    }
  }, [sliding, setSliding, enterprise]);

  const handleBack = useCallback(() => {
    if (sliding !== 0) {
      setSliding(sliding - 1);
    } else {
      setSliding(enterprise!.images.length - 1);
    }
  }, [sliding, setSliding, enterprise]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

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
            <DivImagemTipo src={enterprise?.development.banner} alt="Pégaso" />
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
              <MoreImages>
                <Carousel {...handlers} style={{ cursor: 'grab' }}>
                  {enterprise.images.map(item => (
                    <CarouselContainer key={item.id} sliding={sliding} dir={dir}>
                      <Imagem src={item.imagem} alt={item.name} />
                    </CarouselContainer>
                  ))}
                </Carousel>
                <span>Arraste para os lados</span>
              </MoreImages>
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
