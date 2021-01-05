import React, { useState, useCallback } from 'react';

import { Preloader, ThreeDots } from 'react-preloader-icon';
import GoogleMapReact from 'google-map-react';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import api from '../../services/api';

import Footer from '../../components/Footer';

import {
  Container,
  ContactDiv,
  Contacts,
  Contact,
  Text,
  Map,
  FormDiv,
  Title,
  Form,
  Button,
  StatusMessage,
  PhoneIcon,
  LocationIcon,
  MailIcon,
} from './styles';

const SomeComponent = ({ text }: any) => <div>{text}</div>;

const Contato: React.FC = () => {
  const contactData = [
    {
      name: 'Location',
      icon: <LocationIcon size={50} />,
      text: 'Rua Teste, ao lado do Teste, nº 15, Novo Teste, Teste-TE',
    },
    {
      name: 'Phone',
      icon: <PhoneIcon size={50} />,
      text: '(31) 9 9876 - 5432',
    },
    {
      name: 'Mail',
      icon: <MailIcon size={50} />,
      text: 'teste@pegaso.com',
    },
  ];

  const [center, setCenter] = useState({ lat: -12.9778728, lng: -38.4404094 });
  const [zoom, setZoom] = useState(11);

  return (
    <>
      <Container>
        <ContactDiv>
          <Contacts>
            <Contact infoName={contactData[0].name}>
              {contactData[0].icon}
              <Text>{contactData[0].text}</Text>
            </Contact>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Contact>
                {contactData[1].icon}
                <Text>{contactData[1].text}</Text>
              </Contact>

              <Contact>
                {contactData[2].icon}
                <Text>{contactData[2].text}</Text>
              </Contact>
            </div>
          </Contacts>

          <div style={{ width: '100%', height: '50vh' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyDwvVXrmufqKOeHvepsGplig7sX9nHQyFo',
              }}
              defaultCenter={center}
              defaultZoom={zoom}
            >
              <SomeComponent
                lat={-12.9778728}
                lng={-38.4404094}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </ContactDiv>

        <FormDiv>
          <Title />
          <Text />

          <Form />

          <Button />

          <StatusMessage />
        </FormDiv>
      </Container>
      <Footer />
    </>
  );
};

export default Contato;
