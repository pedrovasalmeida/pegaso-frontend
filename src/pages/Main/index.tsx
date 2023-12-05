/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';

import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { Container, Imagem, MyLink, MyCarousel } from './styles';
import { LeftArrow, RightArrow } from '../DetalhesEmpreendimento/styles';
import { makeListHomeImages } from '../../modules/project/factory/makeListProjects';

ReactGA.pageview(window.location.pathname + window.location.search);

interface Empreendimentos {
  id: number;
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

const Main: React.FC = () => {
  const [desktopImages, setDesktopImages] = useState<string[]>([])
  const [mobileImages, setMobileImages] = useState<string[]>([])
  const { width } = useWindowDimensions();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const history = useHistory();

  function updateCurrentSlide(index: number) {
    setCurrentSlide(prevState => (prevState !== index ? index : prevState));
  }

  const carouselOptions = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    afterChange: index => updateCurrentSlide(index),
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const getImagesFromCmsAndSaveIntoStorage = async () => {
    const listedImages = await makeListHomeImages()
    if (listedImages) {
      setDesktopImages(listedImages?.desktopImages)
      setMobileImages(listedImages?.mobileImages)
      const obgToSaveIntoStorage = { desktopImages: listedImages?.desktopImages, mobileImages: listedImages?.mobileImages }
      localStorage.setItem('@Pegaso:homeImages', JSON.stringify(obgToSaveIntoStorage))
    }
  }

  const getData = async () => {
    const imagesFromStorage = localStorage.getItem('@Pegaso:homeImages')
    if (!imagesFromStorage) {
      await getImagesFromCmsAndSaveIntoStorage()
    } else {
      const fromStorage = JSON.parse(imagesFromStorage)
      setDesktopImages(fromStorage?.desktopImages)
      setMobileImages(fromStorage?.mobileImages)
      await getImagesFromCmsAndSaveIntoStorage()
    }
  }

  const handleNavigateToObras = () => {
    history.push('/obras')
  }

  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container id='container'>
        <MyCarousel {...carouselOptions}>
          {width < 800 ? mobileImages.map((image) => (
            <img src={image} alt={image} onClick={handleNavigateToObras} />
              )) : desktopImages.map((image) => (
                <img src={image} alt={image} onClick={handleNavigateToObras} />
            ))}
        </MyCarousel>
      </Container>
    </>
  );
};
export default Main;
