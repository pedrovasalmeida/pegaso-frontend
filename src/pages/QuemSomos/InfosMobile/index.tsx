import React, { useEffect } from 'react';

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

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  const backgroundUrl = 'https://i.imgur.com/BTly4hM.jpg';

  return (
    <>
      <Container>
        <DivTitle
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Title width={width}>Quem somos</Title>
        </DivTitle>

        <DivDescription
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <Text>
            <strong>
              “Soluções em engenharia para baixar custos e otimizar a produtividade”
            </strong>
          </Text>
          <br />
          <br />
          <Text>
            Este é um dos principais lemas da Construtora Pégaso. Proporcionar para o
            cliente o orçamento mais atrativo e com a melhor qualidade, é a nossa
            principal meta.
          </Text>
          <br />

          <Text>
            Atuante no setor de construção há 10 anos, a Pégaso Engenharia vem
            desenvolvendo trabalhos técnicos na construção civil com foco em projetos,
            construções e reformas. Sempre buscando qualidade e eficiência, possui em seu
            acervo técnico, experiência e preparo em obras comerciais, residenciais e na
            prestação de serviços em manutenção, retrofit e adequações de instalações
            corporativas e industriais.
          </Text>
          <br />
          <Text>
            A qualidade dos serviços prestados é fruto do planejamento rígido, do
            constante acompanhamento das atividades e de um crivo exigente na seleção dos
            fornecedores contratados e das matérias-primas utilizadas.
          </Text>
          <br />
          <Text>
            O nosso objetivo principal é a satisfação do cliente, buscando o
            desenvolvimento, aplicando tecnologias que reduzam custos, respeitando as
            normas de segurança do trabalho, preservando o meio ambiente e, em
            consequência disto, garantir lucro para o crescimento e perpetuação. Superar
            as expectativas dos clientes através da prestação de serviços com qualidade e
            dentro do menor prazo possível é a nossa prioridade.
          </Text>
        </DivDescription>
        <DivBackground>
          <img src={backgroundUrl} alt="Pégaso" />
        </DivBackground>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default InfosMobile;
