import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  DivTitle,
  Title,
  Subtitle,
  DivProjects,
  Project,
  ExternalImage,
  FullImage,
  FloatDiv,
  FloatContent,
  FloatButton,
} from "./styles";

const Projects: React.FC = () => {
  return (
    <Container>
      <DivTitle>
        <Title>Empreendimentos</Title>
        <Subtitle>Conheça nossos empreendimentos com unidades à venda</Subtitle>
      </DivTitle>

      <DivProjects>
        <Link to="/empreendimentos/detalhes">
          <Project>
            <ExternalImage>
              <img
                src="https://i.pinimg.com/originals/c0/e0/fb/c0e0fbd3ebbd368d5b83e69c61873802.jpg"
                alt="teste"
              />
            </ExternalImage>
            <FullImage>
              <img
                src="https://i.pinimg.com/originals/c0/e0/fb/c0e0fbd3ebbd368d5b83e69c61873802.jpg"
                alt="teste"
              />
            </FullImage>
            <FloatDiv>
              <FloatContent>
                <div>
                  <span>Primeiro Empreendimento</span>
                  <p>Kamehameha</p>
                  <span>O mais poderoso já lançado!</span>
                </div>
              </FloatContent>
              <FloatButton>
                <span>Clique aqui para conferir</span>
              </FloatButton>
            </FloatDiv>
          </Project>
        </Link>

        <Link to="/empreendimentos/detalhes">
          <Project>
            <ExternalImage>
              <img
                src="https://i.pinimg.com/originals/c0/e0/fb/c0e0fbd3ebbd368d5b83e69c61873802.jpg"
                alt="teste"
              />
            </ExternalImage>
            <FullImage>
              <img
                src="https://i.pinimg.com/originals/c0/e0/fb/c0e0fbd3ebbd368d5b83e69c61873802.jpg"
                alt="teste"
              />
            </FullImage>
            <FloatDiv>
              <FloatContent>
                <div>
                  <span>Primeiro Empreendimento</span>
                  <p>Kamehameha</p>
                  <span>O mais poderoso já lançado!</span>
                </div>
              </FloatContent>
              <FloatButton>
                <span>Clique aqui para conferir</span>
              </FloatButton>
            </FloatDiv>
          </Project>
        </Link>

        <Link to="/empreendimentos/detalhes">
          <Project>
            <ExternalImage>
              <img
                src="https://i.pinimg.com/originals/c0/e0/fb/c0e0fbd3ebbd368d5b83e69c61873802.jpg"
                alt="teste"
              />
            </ExternalImage>
            <FullImage>
              <img
                src="https://i.pinimg.com/originals/c0/e0/fb/c0e0fbd3ebbd368d5b83e69c61873802.jpg"
                alt="teste"
              />
            </FullImage>
            <FloatDiv>
              <FloatContent>
                <div>
                  <span>Primeiro Empreendimento</span>
                  <p>Kamehameha</p>
                  <span>O mais poderoso já lançado!</span>
                </div>
              </FloatContent>
              <FloatButton>
                <span>Clique aqui para conferir</span>
              </FloatButton>
            </FloatDiv>
          </Project>
        </Link>
      </DivProjects>
    </Container>
  );
};

export default Projects;
