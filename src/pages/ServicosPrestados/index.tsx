import React from 'react';

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
  // Line,
  ServicoTitle,
  Text,
  Square,
} from './styles';

const ServicosPrestados: React.FC = () => {
  return (
    <Container>
      <Title initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}>
        Serviços Prestados
      </Title>

      <ServicosDiv>
        <ServicoDiv
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Servico
            src={ImgConstrucoes}
            alt="Pégaso"
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 0.4 }}
          />
          <ServicoTitle
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Construções, reformas e serviços de manutenção
          </ServicoTitle>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}>
            <Square />
            Industriais
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 0.9 }}>
            <Square />
            Residenciais
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
            <Square />
            Comerciais
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.1 }}>
            <Square />
            Prediais
          </Text>
        </ServicoDiv>

        <ServicoDiv
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Servico
            src={ImgTerceirizacoes}
            alt="Pégaso"
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 0.6 }}
          />
          <ServicoTitle
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9 }}
          >
            Terceirizações
          </ServicoTitle>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
            <Square />
            Piso em concreto polido
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.1 }}>
            <Square isBigger />
            Estruturas metálicas Impermeabilização
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.2 }}>
            <Square />
            <Square />
            Forma, Armação
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.3 }}>
            <Square />
            Revestimentos
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.4 }}>
            <Square />
            Concretagem
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.5 }}>
            <Square />
            Alvenaria
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.6 }}>
            <Square />
            Dry Wall
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.7 }}>
            <Square />
            Pintura
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.8 }}>
            <Square />
            Forro
          </Text>
        </ServicoDiv>

        <ServicoDiv
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Servico
            src={ImgProjetos}
            alt="Pégaso"
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 0.6 }}
          />
          <ServicoTitle
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projetos e Instalações
          </ServicoTitle>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 0.9 }}>
            <Square isBigger />
            Combate a incêndio / SPDA
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
            <Square isBigger />
            CFTV / Lógica / Automação
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.1 }}>
            <Square />
            Combate a Incêndio
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.2 }}>
            <Square />
            Elétrico / Telefônico
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.3 }}>
            <Square />
            Cálculo Estrutural
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.4 }}>
            <Square />
            Ar-condicionado
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.5 }}>
            <Square />
            Hidrossanitário
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.6 }}>
            <Square />
            Hidráulica
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.7 }}>
            <Square />
            Elétrica
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.8 }}>
            <Square />
            SPDA
          </Text>
        </ServicoDiv>

        <ServicoDiv
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Servico
            src={ImgOutros}
            alt="Pégaso"
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
          />
          <ServicoTitle
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2 }}
          >
            Outros
          </ServicoTitle>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.3 }}>
            <Square isBigger />
            Laudo de Avaliações Imobiliárias
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.4 }}>
            <Square />
            Gerenciamento de Obras
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.5 }}>
            <Square />
            Laudo Técnico
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.6 }}>
            <Square />
            Consultoria
          </Text>
          <Text initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1.7 }}>
            <Square />
            Perícia
          </Text>
        </ServicoDiv>
      </ServicosDiv>
    </Container>
  );
};

export default ServicosPrestados;
