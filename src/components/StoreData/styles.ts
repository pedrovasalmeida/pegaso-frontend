import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px 0 0 0;
  width: 100vw;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  height: 90%;
  width: auto;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 16px;
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
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 352px;
  height: 256px;
  padding: 4px 8px;
  margin: 8px;
`;

export const DivImagens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Separator = styled.div`
  align-self: center;
  width: 1px;
  height: 95%;

  margin: 0 8px;

  background-color: rgba(0, 0, 0, 0.2);
`;
