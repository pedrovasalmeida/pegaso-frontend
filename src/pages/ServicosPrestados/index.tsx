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
  Line,
  ServicoTitle,
  Text,
} from './styles';

const ServicosPrestados: React.FC = () => {
  return (
    <Container>
      <Title initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
        Serviços Prestados
      </Title>

      <ServicosDiv>
        <Line
          whatLine="first"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ServicoDiv
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Servico
              src={ImgConstrucoes}
              alt="Pégaso"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
            />
            <ServicoTitle
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Construções, reformas e serviços de manutenção
            </ServicoTitle>
            <Text initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
              Industriais
            </Text>
            <Text initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.9 }}>
              Residenciais
            </Text>
            <Text initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
              Comerciais
            </Text>
            <Text initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1.1 }}>
              Prediais
            </Text>
          </ServicoDiv>

          <ServicoDiv
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Servico
              src={ImgTerceirizacoes}
              alt="Pégaso"
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6 }}
            />
            <ServicoTitle
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9 }}
            >
              Terceirizações
            </ServicoTitle>
            <Text initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
              Piso em concreto polido
            </Text>
            <Text initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 1.1 }}>
              Estruturas metálicas Impermeabilização
            </Text>
            <Text initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 1.2 }}>
              Forma, Armação
            </Text>
            <Text initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 1.3 }}>
              Revestimentos
            </Text>
            <Text initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 1.4 }}>
              Concretagem
            </Text>
            <Text initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 1.5 }}>
              Alvenaria
            </Text>
            <Text initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 1.6 }}>
              Dry Wall
            </Text>
            <Text initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 1.7 }}>
              Pintura
            </Text>
            <Text initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 1.8 }}>
              Forro
            </Text>
          </ServicoDiv>
        </Line>

        <Line whatLine="second">
          <ServicoDiv
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Servico
              src={ImgProjetos}
              alt="Pégaso"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6 }}
            />
            <ServicoTitle
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Projetos e Instalações
            </ServicoTitle>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.9 }}>
              Combate a incêndio / SPDA
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
              CFTV / Lógica / Automação
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.1 }}>
              Combate a Incêndio
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.2 }}>
              Elétrico / Telefônico
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.3 }}>
              Cálculo Estrutural
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.4 }}>
              Ar-condicionado
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.5 }}>
              Hidrossanitário
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.6 }}>
              Hidráulica
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.7 }}>
              Elétrica
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.8 }}>
              SPDA
            </Text>
          </ServicoDiv>

          <ServicoDiv
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Servico
              src={ImgOutros}
              alt="Pégaso"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
            />
            <ServicoTitle
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2 }}
            >
              Outros
            </ServicoTitle>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.3 }}>
              Laudo de Avaliações Imobiliárias
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.4 }}>
              Gerenciamento de Obras
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.5 }}>
              Laudo Técnico
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.6 }}>
              Consultoria
            </Text>
            <Text initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.7 }}>
              Perícia
            </Text>
          </ServicoDiv>
        </Line>
      </ServicosDiv>
    </Container>
  );
};

export default ServicosPrestados;
