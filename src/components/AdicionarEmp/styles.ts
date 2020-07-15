import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;

  width: 90%;
  border-radius: 16px;

  padding: 16px;
  margin: 16px 0 0 0;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const DivDetalhes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 352px;
  height: 32px;

  padding: 4px 8px;
  margin: 8px;

  border-radius: 16px;

  border: 0px solid ${shade(0.4, `rgba(192, 25, 32, 1)`)};

  &:focus {
    border: 1px solid ${shade(0.4, `rgba(192, 25, 32, 1)`)};
    filter: drop-shadow(0px 0px 2px ${shade(0.4, `rgba(192, 25, 32, 1)`)});
  }
`;

export const TextArea = styled.textarea`
  resize: none;

  width: 352px;
  height: 256px;

  padding: 4px 8px;
  margin: 8px;

  border-radius: 16px;

  border: 0px solid ${shade(0.4, `rgba(192, 25, 32, 1)`)};

  &:focus {
    border: 1px solid ${shade(0.4, `rgba(192, 25, 32, 1)`)};
    filter: drop-shadow(0px 0px 2px ${shade(0.4, `rgba(192, 25, 32, 1)`)});
  }
`;

export const DivDireita = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const DivImagens = styled.div`
  display: flex;
  flex-direction: column;

  > form span:first-child {
    color: white;
    font-weight: 500;
    filter: drop-shadow(0px 0px 2px black);
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;

  height: 10%;

  > button {
    width: 60%;

    border-radius: 16px;

    transition: all 300ms ease-in-out;

    border: 0px solid white;

    font-weight: 400;

    &:hover {
      color: white;

      font-weight: 700;

      border: 1px solid white;

      background-color: ${shade(0.4, `rgba(192, 25, 32, 1)`)};
    }
  }
`;

export const UploadButton = styled.input`
  width: 100%;
  height: 32px;

  border: 0px solid white;
  border-radius: 16px;

  margin: 16px 0;

  font-weight: 400;

  transition: all 300ms ease-in-out;

  &:hover {
    color: white;

    font-weight: 700;

    border: 1px solid white;

    background-color: ${shade(0.4, `rgba(192, 25, 32, 1)`)};
  }
`;

export const Separator = styled.div`
  align-self: center;
  width: 1px;
  height: 95%;

  margin: 0 32px;

  background-color: rgba(0, 0, 0, 0.2);
`;
