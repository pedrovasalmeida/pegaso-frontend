import React from "react";

import {
  Container,
  Imagem,
  Details,
  Title,
  Empreendimento,
  Text,
  Endereco,
  MoreImages,
  DivTitlePlanta,
  Plantas,
  OpcaoPlanta,
  TitlePlanta,
  Localizacao,
  Maps,
  DetalhesBairro,
} from "./styles";

const Infos: React.FC = () => {
  return (
    <Container>
      <Imagem src="https://i.redd.it/u105ro5rg8o31.jpg" alt="Imagem" />

      <Details>
        <Empreendimento>
          <Title>Empreendimento</Title>
          <Text>• Quarto e sala</Text>
          <Text>• Apenas 4 apartamentos por andar</Text>
          <Text>• Todos voltados para o nascente</Text>
          <Text>• Quarto e sala</Text>
          <Text>• Apenas 4 apartamentos por andar</Text>
          <Text>• Todos voltados para o nascente</Text>
        </Empreendimento>

        <Endereco>
          <Title>Endereço</Title>
          <Text>
            Poucos bairros da cidade são tão charmosos quanto a Graça. Um
            endereço que dispensa comentários: completo, nobre, único
          </Text>
        </Endereco>
      </Details>

      <MoreImages />

      <DivTitlePlanta>
        <Title>Plantas</Title>
      </DivTitlePlanta>

      <Plantas>
        <OpcaoPlanta>
          <img src="https://i.redd.it/u105ro5rg8o31.jpg" alt="#" />

          <TitlePlanta>Opção 1</TitlePlanta>
          <Text>Área privativa: 47,48m²</Text>
        </OpcaoPlanta>
        <OpcaoPlanta>
          <img src="https://i.redd.it/u105ro5rg8o31.jpg" alt="#" />

          <TitlePlanta>Opção 2</TitlePlanta>
          <Text>Área privativa: 47,48m²</Text>
        </OpcaoPlanta>
        <OpcaoPlanta>
          <img src="https://i.redd.it/u105ro5rg8o31.jpg" alt="#" />

          <TitlePlanta>Opção 3</TitlePlanta>
          <Text>Área privativa: 47,48m²</Text>
        </OpcaoPlanta>
        <OpcaoPlanta>
          <img src="https://i.redd.it/u105ro5rg8o31.jpg" alt="#" />

          <TitlePlanta>Opção 4</TitlePlanta>
          <Text>Área privativa: 47,48m²</Text>
        </OpcaoPlanta>
        <OpcaoPlanta>
          <img src="https://i.redd.it/u105ro5rg8o31.jpg" alt="#" />

          <TitlePlanta>Opção 5</TitlePlanta>
          <Text>Área privativa: 47,48m²</Text>
        </OpcaoPlanta>
        <OpcaoPlanta>
          <img src="https://i.redd.it/u105ro5rg8o31.jpg" alt="#" />

          <TitlePlanta>Opção 6</TitlePlanta>
          <Text>Área privativa: 47,48m²</Text>
        </OpcaoPlanta>
      </Plantas>

      <Localizacao>
        <Maps />
        <DetalhesBairro />
      </Localizacao>
    </Container>
  );
};

export default Infos;
