import React from 'react';

import useWindowDimensions from '../../../hooks/useWindowDimensions';

import Footer from '../../../components/Footer';

import {
  Container,
  DivTitle,
  // DivTitleMotion,
  Title,
  DivDescription,
  Text,
  // DivCategorias,
  // SubDivCategorias,
  // Categoria,
  DivBackground,
} from './styles';

const InfosMobile: React.FC = () => {
  const { width } = useWindowDimensions();

  // const backgroundUrl = 'https://i.imgur.com/n7mYaHC.png';
  const backgroundUrl = 'https://i.imgur.com/BTly4hM.jpg';

  return (
    <Container>
      <DivTitle animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        <Title width={width}>Quem somos</Title>
      </DivTitle>

      <DivDescription animate={{ x: 0 }} transition={{ duration: 0.7 }}>
        <Text>
          <strong>
            “Soluções em engenharia para baixar custos e otimizar a produtividade”
          </strong>
        </Text>
        <br />
        <br />
        <Text>
          Este é um dos principais lemas da Construtora Pégaso. Proporcionar para o
          cliente o orçamento mais atrativo e com a melhor qualidade, é a nossa principal
          meta.
        </Text>
        <br />

        <Text>
          Atuante no setor de construção há 10 anos, a Pégaso Engenharia vem desenvolvendo
          trabalhos técnicos na construção civil com foco em projetos, construções e
          reformas. Sempre buscando qualidade e eficiência, possui em seu acervo técnico,
          experiência e preparo em obras comerciais, residenciais e na prestação de
          serviços em manutenção, retrofit e adequações de instalações corporativas e
          industriais.
        </Text>
        <br />
        <Text>
          A qualidade dos serviços prestados é fruto do planejamento rígido, do constante
          acompanhamento das atividades e de um crivo exigente na seleção dos fornecedores
          contratados e das matérias-primas utilizadas.
        </Text>
        <br />
        <Text>
          O nosso objetivo principal é a satisfação do cliente, buscando o
          desenvolvimento, aplicando tecnologias que reduzam custos, respeitando as normas
          de segurança do trabalho, preservando o meio ambiente e, em consequência disto,
          garantir lucro para o crescimento e perpetuação. Superar as expectativas dos
          clientes através da prestação de serviços com qualidade e dentro do menor prazo
          possível é a nossa prioridade.
        </Text>
      </DivDescription>

      {/* <DivCategorias>
        <SubDivCategorias>
          <DivTitleMotion animate={{ x: 0 }} transition={{ duration: 0.8 }}>
            <Title width={width}>Qualificações</Title>
          </DivTitleMotion>

          <Categoria animate={{ x: 0 }} transition={{ duration: 1 }}>
            <p>Genki-dama Especial</p>

            <span>
              Premiada 12 vezes como a maior Genki-dama já feita em todo o Universo 7.
            </span>
          </Categoria>

          <Categoria animate={{ x: 0 }} transition={{ duration: 1.1 }}>
            <p>Kamehameha Mais Forte</p>

            <span>O Kamehamehá mais impactante do mercado.</span>
          </Categoria>

          <Categoria animate={{ x: 0 }} transition={{ duration: 1.2 }}>
            <p>Teleporte</p>

            <span>Teleporta-se para qualquer ponto no Universo 7 onde há Ki.</span>
          </Categoria>
        </SubDivCategorias>
      </DivCategorias> */}
      {/* <DivImagemTipo
        animate={{ x: 0 }}
        transition={{ duration: 1.3 }}
        url={backgroundUrl}
      /> */}
      <DivBackground url={backgroundUrl} />
      <Footer />
    </Container>
  );
};

export default InfosMobile;
