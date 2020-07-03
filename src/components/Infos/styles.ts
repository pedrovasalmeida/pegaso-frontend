import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 8px 0 0 16px;

  justify-content: space-between;

  @media (max-width: 1060) {
    display: flex;
    margin: 8px 0 0 16px;

    justify-content: center;
  }

  @media (max-width: 677px) {
    flex-direction: column;
  }
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;

  width: 60vw;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Subtitle = styled.span`
  width: 100px;
  font-size: 24px;

  text-transform: uppercase;
  font-weight: bold;

  color: rgba(0, 100, 255, 1);
  border-bottom: 4px solid rgba(0, 100, 255, 1);

  margin: 0 0 8px 0;
`;

export const DivDescription = styled.div`
  width: 90%;

  @media (max-width: 677px) {
    width: 90vw;
  }
`;

export const Text = styled.span`
  display: flex;
  text-align: justify;

  font-weight: 300;

  font-size: 14px;
`;

export const DivCategorias = styled.div`
  display: flex;
  flex-direction: column;

  margin: 16px 0 0 0;

  > span:first-child {
    margin: 16px 0 0 0;
  }

  @media (max-width: 1063px) {
    width: 90%;
  }

  @media (max-width: 897px) {
    margin: 80px 0 0 0;
  }

  @media (max-width: 865px) {
    position: absolute;
    bottom: 40px;
    left: 32px;
  }

  @media (max-width: 677px) {
    margin: 32px 0 0 0;
    position: relative;
    width: 80vw;
  }

  @media (max-width: 360px) {
    margin: 32px 0 0 0;
    position: relative;
    width: 60vw;

    > span:first-child {
      font-size: 22px;
    }
  }
`;

export const SubDivCategorias = styled.div`
  display: flex;
  text-align: center;

  @media (max-width: 568px) {
    flex-direction: column;

    .separator {
      display: none;
    }
  }

  @media (max-width: 360px) {
    flex-direction: column;

    .separator {
      display: none;
    }
  }
`;

export const CatTitle = styled.span`
  font-size: 22px;

  text-transform: uppercase;
`;

export const Categoria = styled.div`
  width: auto;
  margin: 16px 0 0 0;

  > p {
    font-size: 16px;
    text-transform: uppercase;
    color: rgba(0, 100, 255, 1);
  }

  > span {
    width: 100%;
    display: flex;
    font-size: 14px;
    text-align: justify;
  }

  @media (max-width: 360px) {
    > p {
      font-size: 20px;
    }

    > span {
      font-size: 14px;
    }
  }
`;

export const VerticalSeparator = styled.div`
  display: flex;
  align-self: center;
  width: 1px;
  height: 80px;

  margin: 0 16px;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const DivImagem = styled.div`
  display: flex;
  flex-direction: column;

  height: 55vh;

  margin: 8px 32px 0 0;
`;

export const Imagem = styled.img``;

export const TextImage = styled.span`
  display: flex;
  align-self: flex-end;

  margin: 2px 0 0 0;

  font-weight: 500;

  font-size: 14px;
`;
