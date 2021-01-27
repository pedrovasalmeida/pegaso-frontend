import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: auto;

  padding-top: 64px;
  padding-left: 24px;
  padding-bottom: 45px;

  @media only screen and (min-width: 300px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const Title = styled.span`
  width: auto;
  border-bottom: 8px solid ${props => props.theme.colors.light.lightBlue};

  font-size: 30px;
  font-weight: bold;

  color: #333;

  text-transform: uppercase;
`;

export const ParceirosDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 18vw;

  margin-top: 15px;

  @media only screen and (min-width: 300px) {
    width: 100%;
  }

  @media only screen and (min-width: 518px) {
    width: 70%;
  }

  @media only screen and (min-width: 734px) {
    width: 50%;
  }

  @media only screen and (min-width: 1029px) {
    width: 40%;
  }

  @media only screen and (min-width: 1281px) {
    width: 30%;
  }
`;

export const Parceiro = styled(motion.img)`
  width: 150px;

  margin: 20px;

  &:hover {
    transform: translateY(-4px);
  }
`;
