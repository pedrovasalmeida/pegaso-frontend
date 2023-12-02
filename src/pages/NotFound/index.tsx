/* eslint-disable react/style-prop-object */
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Lottie from 'react-lottie';
import animationData from '../../assets/404-not-found.json';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { Container, MyLottie, Text, Links } from './styles';

const NotFound: React.FC = () => {
  const { width } = useWindowDimensions();
  const history = useHistory();

  const handleNavigate = useCallback(
    (route: string) => {
      history.push(route);
    },
    [history],
  );

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const lottieStyles = {
    cursor: 'default',
    pointerEvents: 'none',
  };

  return (
    <Container>
      <MyLottie
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Lottie
          options={defaultOptions}
          height={width < 480 ? 250 : 400}
          width={width < 480 ? 250 : 400}
          style={lottieStyles}
        />
        <Text
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          A página que você tentou acessar não existe! :(
        </Text>
        <Links
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <Text className="link" onClick={() => handleNavigate('/')}>
            ← Voltar para Início
          </Text>
          <Text className="link" onClick={() => handleNavigate('/obras')}>
            Nossas obras →
          </Text>
        </Links>
      </MyLottie>
    </Container>
  );
};

export default NotFound;
