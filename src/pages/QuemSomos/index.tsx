import React from 'react';

import {
  Container,
  DivInfos,
  DivTitle,
  Title,
  DivDescription,
  Text,
  DivImagemTipo,
} from './styles';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import InfosMobile from './InfosMobile';
import Footer from '../../components/Footer';

const QuemSomos: React.FC = () => {
  const { width } = useWindowDimensions();
  const backgroundUrl = 'https://i.imgur.com/BTly4hM.jpg';

  return (
    <>
      {width < 1500 ? (
        <InfosMobile />
      ) : (
        <Container>
          <DivInfos>
            <DivTitle
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Title>Quem somos</Title>
            </DivTitle>

            <DivDescription>
              <Text
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                <strong>
                  “Soluções em engenharia para baixar custos e otimizar a produtividade”
                </strong>
              </Text>
              <br />
              <br />
              <Text
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.1 }}
              >
                Este é um dos principais lemas da Construtora Pégaso. Proporcionar para o
                cliente o orçamento mais atrativo e com a melhor qualidade, é a nossa
                principal meta.
              </Text>
              <br />

              <Text
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3 }}
              >
                Atuante no setor de construção há 10 anos, a Pégaso Engenharia vem
                desenvolvendo trabalhos técnicos na construção civil com foco em projetos,
                construções e reformas. Sempre buscando qualidade e eficiência, possui em
                seu acervo técnico, experiência e preparo em obras comerciais,
                residenciais e na prestação de serviços em manutenção, retrofit e
                adequações de instalações corporativas e industriais.
              </Text>
              <br />
              <Text
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                A qualidade dos serviços prestados é fruto do planejamento rígido, do
                constante acompanhamento das atividades e de um crivo exigente na seleção
                dos fornecedores contratados e das matérias-primas utilizadas.
              </Text>
              <br />
              <Text
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.7 }}
              >
                O nosso objetivo principal é a satisfação do cliente, buscando o
                desenvolvimento, aplicando tecnologias que reduzam custos, respeitando as
                normas de segurança do trabalho, preservando o meio ambiente e, em
                consequência disto, garantir lucro para o crescimento e perpetuação.
                Superar as expectativas dos clientes através da prestação de serviços com
                qualidade e dentro do menor prazo possível é a nossa prioridade.
              </Text>
            </DivDescription>
          </DivInfos>
          <DivImagemTipo
            url={backgroundUrl}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.7 }}
          >
            <img src={backgroundUrl} alt="Pegaso" />
          </DivImagemTipo>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default QuemSomos;
