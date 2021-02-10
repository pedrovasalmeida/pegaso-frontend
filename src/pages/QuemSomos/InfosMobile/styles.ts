import styled from 'styled-components';

import { motion } from 'framer-motion';

interface ScreenSizeProps {
  width: number;
}

interface BackgroundProps {
  url?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;

  margin-top: 64px;

  overflow-x: hidden;
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

  margin-top: 40px;
  margin-bottom: 10px;
`;

export const Title = styled.span<ScreenSizeProps>`
  position: relative;
  width: auto;

  padding-top: 18px;
  margin-bottom: 18px;

  font-size: 30px;
  font-weight: bold;

  color: #333;

  cursor: default;

  text-transform: uppercase;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;

    width: 100%;
    height: 4px;

    background: ${p => p.theme.colors.light.lightBlue};
    border-radius: 2px;

    margin: auto;
    bottom: -10px;

    transition: all 400ms ease;

    transform: scaleX(0.3);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const DivDescription = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: auto;

  margin: 16px 0;

  text-align: justify;
`;

export const Text = styled.span`
  display: flex;
  text-align: justify;
  font-weight: 400;

  strong {
    width: 100%;
    text-align: center;
  }
`;

export const DivCategorias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  height: auto;

  overflow: hidden;

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
  > p {
    font-size: 16px;
    text-transform: uppercase;

    color: ${props => props.theme.colors.light.lightBlue};

    line-height: 42px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.colors.light.lightBlue};
  }

  > span {
    display: flex;
    text-align: justify;

    width: 100%;
    font-size: 14px;

    margin-bottom: 20px;
  }
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

export const DivImagemTipo = styled(motion.div)<BackgroundProps>`
  /* margin: 16px 0 100px 0; */

  height: calc(100vh - 190px);
  width: 100vw;

  background: url(${props => props.url}) no-repeat center center fixed;
  background-size: cover;
`;

export const DivBackground = styled.div<BackgroundProps>`
  overflow-x: hidden;

  height: 100vh;
  width: 100%;

  background: url(${props => props.url}) no-repeat center center fixed;
  background-size: cover;
`;
