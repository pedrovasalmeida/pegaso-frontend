import styled from 'styled-components';
import { shade } from 'polished';
import { FaWhatsapp } from 'react-icons/fa';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;

  height: 81px;
  width: 100vw;

  background-color: #fdfdfd;

  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));

  z-index: 4;
`;

export const Separator = styled.div`
  height: 32px;
  width: 1px;

  background-color: rgba(0, 0, 0, 0.2);

  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2));
`;

export const Data = styled.div``;

export const Contact = styled.div`
  display: flex;
  height: 100%;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 64px;
  width: auto;

  padding: 0 16px;
  margin: 8px 8px;

  border-radius: 8px;
  border-bottom: 2px solid ${shade(0.1, `#aa160e`)};

  background-color: rgba(0, 0, 0, 0.15);

  cursor: pointer;

  transition: all 200ms ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const ContactData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactIcon = styled(FaWhatsapp)`
  margin: 0 8px 0 0;
  font-size: 24px;
`;

export const ContactName = styled.span`
  text-transform: uppercase;
  line-height: 4px;
  font-size: 12px;
`;

export const ContactText = styled.span``;

export const HorizontalSeparator = styled.div`
  width: 48px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);

  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 1));
  margin: 6px 0 0 0;
`;
