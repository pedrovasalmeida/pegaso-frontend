import React from 'react';

import {
  Container,
  DivInfos,
  DivTitle,
  Title,
  DivDescription,
  Text,
  DivCategorias,
  SubDivCategorias,
  Categoria,
  Separator,
  DivImagemTipo,
} from './styles';

const Infos: React.FC = () => {
  return (
    <Container>
      <DivInfos>
        <DivTitle>
          <Title>Quem somos</Title>
        </DivTitle>

        <DivDescription>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tempus euismod laoreet. Integer cursus nulla id lobortis tincidunt.
            Nulla facilisi. Proin et justo nisi. Morbi est magna, vehicula sed
            mattis eget, volutpat eu massa. Praesent sed laoreet dolor, vel
            pellentesque purus. Vivamus at velit in ipsum sollicitudin porta
            vitae vel eros. Sed porta mauris vel nunc varius venenatis.
            Pellentesque efficitur rhoncus egestas. In hac habitasse platea
            dictumst. Nulla eu lacus nec sem porta rutrum. Vestibulum vitae
            magna sagittis, imperdiet purus sed, pharetra urna. Mauris quis
            sagittis arcu. Cras quis lectus rutrum erat posuere posuere. Morbi
            fringilla ante at justo aliquam viverra. Aenean convallis erat
            fringilla metus fermentum commodo.
          </Text>
        </DivDescription>

        <DivCategorias>
          <Title>Qualificações</Title>

          <SubDivCategorias>
            <Categoria>
              <p>Genki-dama Especial</p>

              <span>
                Premiada 12 vezes como a maior Genki-dama já feita em todo o
                Universo 7.
              </span>
            </Categoria>

            <Separator className="separator" />

            <Categoria>
              <p>Kamehameha Mais Forte</p>

              <span>O Kamehamehá mais impactante do mercado.</span>
            </Categoria>

            <Separator className="separator" />

            <Categoria>
              <p>Teleporte</p>

              <span>
                Teleporta-se para qualquer ponto no Universo 7 onde há Ki.
              </span>
            </Categoria>
          </SubDivCategorias>
        </DivCategorias>
      </DivInfos>
      <DivImagemTipo />
    </Container>
  );
};

export default Infos;
