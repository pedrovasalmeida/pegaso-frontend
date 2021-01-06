import styled from 'styled-components';

import { motion } from 'framer-motion';

interface ScreenSizeProps {
  width: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Title = styled.span<ScreenSizeProps>`
  width: auto;
  border-bottom: 8px solid #324286;

  font-size: ${props => (props.width < 346 ? '34px' : '40px')};
  font-weight: bold;

  color: #333;

  text-transform: uppercase;
`;

export const DivDescription = styled(motion.div)`
  width: 80vw;
  height: auto;

  margin: 16px 0;
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

  width: 80vw;
  height: 80vh;

  > span:first-child {
    margin: 16px 0 0 0;
  }
`;

export const SubDivCategorias = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  margin: 16px 0 100px 0;

  > img {
    width: auto;
    max-width: 95vw;
    height: auto;

    object-fit: cover;
  }
`;
