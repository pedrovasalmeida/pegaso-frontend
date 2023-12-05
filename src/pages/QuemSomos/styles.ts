import styled, { keyframes } from 'styled-components';

import { motion } from 'framer-motion';

interface BackgroundProps {
  url?: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 104px);
  margin-top: 64px;
  overflow: hidden;
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  max-width: 40%;
  height: calc(100vh - 104px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
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
  width: 60%;
  height: auto;
  margin: 16px 0 0 0;
`;

export const Text = styled(motion.span)`
  display: flex;
  text-align: justify;
  font-weight: 400;

  strong {
    text-align: center;
  }
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
    color: ${props => props.theme.colors.light.lightBlue};
  }
  > span {
    width: 100%;
    display: flex;
    font-size: 14px;
    text-align: justify;
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

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DivImagemTipo = styled(motion.div)<BackgroundProps>`
  display: flex;
  height: calc(100vh - 104px);

  > img {
    pointer-events: none;
    height: 100%;
    width: 1080px;
    opacity: 0;
    object-fit: fill;
    animation: ${fadeIn} 2s ease 0.5s forwards;
  }
`;
