import styled from "styled-components";

import bgMobile from "../../assets/bg_mobile.jpg";
import bgDesk from "../../assets/bg_desk.jpg";

export const Container = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  overflow: auto;
  background-image: ${props => props.width < 768 ? `url(${bgMobile})` : `url(${bgDesk})`};
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: 100% 100%;
`
