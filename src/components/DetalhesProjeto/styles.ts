import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 99vw;
`;

export const Imagem = styled.img`
  height: 700px;
  object-fit: cover;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
`;

export const Empreendimento = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 16px 0 0 16px;
  margin: 0 0 8px 0;
`;

export const Endereco = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  padding: 16px 0 0 16px;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 8px 0;
  color: rgba(192, 25, 32, 0.8);
`;

export const Text = styled.span`
  margin: 4px 0;
  font-weight: 300;
`;

export const MoreImages = styled.div`
  align-self: center;
  width: 66%;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const DivTitlePlanta = styled.div`
  display: flex;
  align-self: center;
  width: 66%;
  margin: 16px 0;

  span {
    color: rgba(192, 25, 32, 1);
    border-bottom: 1px solid ${shade(0.2, `rgba(192, 25, 32, 0.8)`)};
  }
`;

export const Plantas = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-self: center;

  flex-wrap: wrap;

  width: 66%;

  background-color: rgba(0, 0, 0, 0.05);

  margin: 8px 0 0 0;
`;

export const OpcaoPlanta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 22.5%;
  height: 400px;
  margin: 8px;

  > img {
    margin: 8px 0;
    width: 70%;
    height: 70%;
  }

  span + span {
    font-size: 14px;
  }
`;

export const TitlePlanta = styled.span`
  color: rgba(192, 25, 32, 0.8);
  font-weight: bold;
  text-transform: uppercase;
`;

export const Localizacao = styled.div`
  display: flex;
  align-self: center;
  width: 66%;

  margin: 8px 0;
`;

export const Maps = styled.div`
  width: 60%;
  height: 500px;

  background-color: rgba(0, 0, 0, 0.2);

  margin: 0 8px 0 0;
`;

export const DetalhesBairro = styled.div`
  width: 40%;
  height: 500px;

  background-color: rgba(0, 0, 0, 0.2);
`;
