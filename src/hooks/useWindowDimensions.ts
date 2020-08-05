import { useState, useEffect } from 'react';

/** captura os valores atuais de largura e altura da tela */
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
}

export default function useWindowDimensions() {
  /** estado para manter os valores da tela */
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
