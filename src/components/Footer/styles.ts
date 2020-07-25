import styled from 'styled-components';
import { shade } from 'polished';
import { FaWhatsapp, FaPhoneVolume } from 'react-icons/fa';
import { MdReportProblem, MdEmail } from 'react-icons/md';

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

export const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  color: #888;

  &::before {
    content: '';
    border-bottom: 1px solid #aa160e;
  }
`;

export const Contact = styled.div`
  display: flex;
  height: 100%;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: auto;

  padding: 0 16px;
  margin: 0 16px;

  border-radius: 8px;
  border: 1px solid ${shade(0.1, `#aa160e`)};
  border-left: 4px solid ${shade(0.1, `#aa160e`)};
  border-bottom: 4px solid ${shade(0.1, `#aa160e`)};

  background-color: rgba(0, 0, 0, 0.05);

  cursor: pointer;

  transition: all 300ms ease;

  &:hover {
    transform: translateX(4px);
    box-shadow: -3px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const ContactData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WhatsAppIcon = styled(FaWhatsapp)`
  margin: 0 8px 0 0;
  font-size: 32px;
`;

export const PhoneIcon = styled(FaPhoneVolume)`
  margin: 0 8px 0 0;
  font-size: 32px;
`;

export const SacIcon = styled(MdReportProblem)`
  margin: 0 8px 0 0;
  font-size: 32px;
`;

export const EmailIcon = styled(MdEmail)`
  margin: 0 8px 0 0;
  font-size: 32px;
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
