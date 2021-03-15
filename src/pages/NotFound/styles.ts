import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 60px);

  margin-top: 60px;

  background: linear-gradient(90deg, #fcfcfc, #fff, #fcfcfc);
`;

export const MyLottie = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: default;
`;

export const Links = styled(motion.div)`
  display: flex;

  span {
    padding: 0 17px;

    &:first-child {
      border-right: 2px solid #ccc;
    }
  }

  @media only screen and (max-width: 374px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      margin: 10px;
      padding: 0;

      &:first-child {
        border: 0;
      }
    }
  }
`;

export const Text = styled(motion.span)`
  font-size: 20px;
  margin: 30px 0;

  &.link {
    cursor: pointer;

    color: ${p => p.theme.colors.light.lightBlue};
    font-size: 18px;

    transition: color 300ms ease;

    &:hover {
      text-decoration: none;
      color: ${p => p.theme.colors.light.darkBlue};
    }
  }

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 362px) {
    max-width: 70vw;
    font-size: 16px;
  }
`;
