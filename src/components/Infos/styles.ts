import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;

  padding: 0 128px;

  width: 100%;
  height: 100%;

  @media (max-width: 1069px) {
    flex-direction: column;
  }
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;

  @media (max-width: 897px) {
  }

  @media (max-width: 1069px) {
    width: 98%;
    padding: 0 0 8px 0;
  }
`;

export const DivTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivTitleMotion = styled(motion.div)`
  width: auto;
  height: auto;

  margin: 0 0 32px 0;
`;

export const Title = styled.span`
  width: auto;
  border-bottom: 8px solid #324286;

  font-size: 40px;
  font-weight: bold;

  color: #333;

  text-transform: uppercase;
`;

export const DivDescription = styled(motion.div)`
  width: 60%;
  height: auto;

  margin: 16px 0 0 0;
`;

export const Text = styled.span`
  display: flex;
  text-align: justify;

  font-weight: 400;
`;

export const DivCategorias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60%;

  padding: 16px 0;

  > span:first-child {
    margin: 16px 0 0 0;
  }

  @media (max-width: 897px) {
    align-items: center;

    > span:first-child {
      margin: 0;
      font-size: 32px;
    }
  }

  /* @media (max-width: 1063px) {
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
  } */
`;

export const SubDivCategorias = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 897px) {
    flex-direction: column;

    align-items: center;

    .separator {
      display: none;
    }
  }

  /* @media (max-width: 568px) {
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
  } */
`;

export const CatTitle = styled.span`
  font-size: 32px;
  font-weight: bold;

  text-transform: uppercase;
`;

export const Categoria = styled(motion.div)`
  width: auto;

  > p {
    font-size: 16px;
    text-transform: uppercase;
    color: #324286;
  }

  > span {
    width: 100%;
    display: flex;
    font-size: 14px;
    text-align: justify;
  }

  /* @media (max-width: 360px) {
    > p {
      font-size: 20px;
    }

    > span {
      font-size: 14px;
    }
  } */
`;

export const Separator = styled(motion.div)`
  display: flex;
  width: 50%;
  height: 1px;

  margin: 16px 0;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const DivImagem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: auto;

  margin: 8px 32px 0 0;
`;

export const Imagem = styled.img`
  object-fit: contain;
`;

export const TextImage = styled.span`
  display: flex;
  align-self: center;

  margin: 2px 0 0 0;

  font-weight: 500;

  font-size: 14px;
`;

export const DivImagemTipo = styled(motion.div)`
  width: 50vw;
  height: 100vh;

  background: url('https://i.imgur.com/n7mYaHC.png') no-repeat center center
    fixed;
  background-size: cover;

  transform: translateX(100px);
`;
