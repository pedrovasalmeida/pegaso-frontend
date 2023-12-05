import React, { useEffect } from 'react';

import ImgConstrucoes from '../../assets/sp-construcoes.png';
import ImgProjetos from '../../assets/sp-projetos.png';
import ImgOutros from '../../assets/sp-outros.png';
import ImgTerceirizacoes from '../../assets/sp-terceirizacoes.png';

import {
  Container,
  Title,
  ServicosDiv,
  ServicoDiv,
  Servico,
  ServicoTitle,
  Text,
  Square,
} from './styles';
import Footer from '../../components/Footer';

const ServicosPrestados: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <>
      <Container>
        <Title
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Serviços Prestados
        </Title>

        <ServicosDiv>
          <ServicoDiv
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Servico
              src={ImgConstrucoes}
              alt="Pégaso"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
            />
            <ServicoTitle
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Construções, reformas e serviços de manutenção
            </ServicoTitle>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Square />
              Industriais
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <Square />
              Residenciais
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Square />
              Comerciais
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Square />
              Prediais
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Square />
              Terraplanagem
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
            >
              <Square />
              Obras Públicas
            </Text>
          </ServicoDiv>

          <ServicoDiv
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Servico
              src={ImgTerceirizacoes}
              alt="Pégaso"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
              transition={{ duration: 0.6 }}
            />
            <ServicoTitle
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              Terceirizações
            </ServicoTitle>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Square />
              Piso em concreto polido
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Square isBigger />
              Estruturas metálicas Impermeabilização
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Square />
              <Square />
              Forma, Armação
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
            >
              <Square />
              Revestimentos
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
            >
              <Square />
              Concretagem
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Square />
              Alvenaria
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.6 }}
            >
              <Square />
              Dry Wall
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7 }}
            >
              <Square />
              Pintura
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.8 }}
            >
              <Square />
              Forro
            </Text>
          </ServicoDiv>

          <ServicoDiv
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Servico
              src={ImgProjetos}
              alt="Pégaso"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
              transition={{ duration: 0.6 }}
            />
            <ServicoTitle
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Projetos e Instalações
            </ServicoTitle>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <Square />
              Projeto Arquitetônico
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Square />
              Design de interiores
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Square />
              Projeto Estrutural
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Square isBigger />
              Projeto Elétrico / Ar-condicionado
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
            >
              <Square isBigger />
              Projeto Hidráulico / Hidrossanitário
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
            >
              <Square isBigger />
              Combate a incêndio / SPDA
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Square isBigger />
              CFTV / Lógica / Automação / Telefônico
            </Text>
          </ServicoDiv>

          <ServicoDiv
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Servico
              src={ImgOutros}
              alt="Pégaso"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
            />
            <ServicoTitle
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Outros
            </ServicoTitle>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
            >
              <Square isBigger />
              Laudo de Avaliações Imobiliárias
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
            >
              <Square />
              Gerenciamento de Obras
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Square />
              Laudo Técnico
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.6 }}
            >
              <Square />
              Consultoria
            </Text>
            <Text
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7 }}
            >
              <Square />
              Perícia
            </Text>
          </ServicoDiv>
        </ServicosDiv>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default ServicosPrestados;
