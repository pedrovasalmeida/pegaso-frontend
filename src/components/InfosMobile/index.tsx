import React from 'react';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import {
  Container,
  DivInfos,
  DivTitle,
  DivTitleMotion,
  Title,
  DivDescription,
  Text,
  DivCategorias,
  SubDivCategorias,
  Categoria,
  Separator,
  DivImagemTipo,
} from './styles';

const InfosMobile: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <DivTitle animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        <Title width={width}>Quem somos</Title>
      </DivTitle>

      <DivDescription animate={{ x: 0 }} transition={{ duration: 0.7 }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
          euismod laoreet. Integer cursus nulla id lobortis tincidunt. Nulla
          facilisi. Proin et justo nisi. Morbi est magna, vehicula sed mattis
          eget, volutpat eu massa. Praesent sed laoreet dolor, vel pellentesque
          purus. Vivamus at velit in ipsum sollicitudin porta vitae vel eros.
          Sed porta mauris vel nunc varius venenatis. Pellentesque efficitur
          rhoncus egestas. In hac habitasse platea dictumst. Nulla eu lacus nec
          sem porta rutrum. Vestibulum vitae magna sagittis, imperdiet purus
          sed, pharetra urna. Mauris quis sagittis arcu. Cras quis lectus rutrum
          erat posuere posuere. Morbi fringilla ante at justo aliquam viverra.
          Aenean convallis erat fringilla metus fermentum commodo.
        </Text>
      </DivDescription>

      <DivCategorias>
        <SubDivCategorias>
          <DivTitleMotion animate={{ x: 0 }} transition={{ duration: 0.8 }}>
            <Title width={width}>Qualificações</Title>
          </DivTitleMotion>

          <Categoria animate={{ x: 0 }} transition={{ duration: 1 }}>
            <p>Genki-dama Especial</p>

            <span>
              Premiada 12 vezes como a maior Genki-dama já feita em todo o
              Universo 7.
            </span>
          </Categoria>

          <Separator animate={{ x: 0 }} transition={{ duration: 1.1 }} />

          <Categoria animate={{ x: 0 }} transition={{ duration: 1.1 }}>
            <p>Kamehameha Mais Forte</p>

            <span>O Kamehamehá mais impactante do mercado.</span>
          </Categoria>

          <Separator animate={{ x: 0 }} transition={{ duration: 1.2 }} />

          <Categoria animate={{ x: 0 }} transition={{ duration: 1.2 }}>
            <p>Teleporte</p>

            <span>
              Teleporta-se para qualquer ponto no Universo 7 onde há Ki.
            </span>
          </Categoria>
        </SubDivCategorias>
      </DivCategorias>
      <DivImagemTipo>
        <img src="https://i.imgur.com/n7mYaHC.png" alt="Pegaso" />
      </DivImagemTipo>
      {/* <DivImagemTipo animate={{ x: 0 }} transition={{ duration: 1.3 }} /> */}
    </Container>
  );
};

export default InfosMobile;
