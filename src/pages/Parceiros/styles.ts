import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: auto;

  padding-top: 64px;
  padding-left: 24px;
  padding-bottom: 45px;
`;

export const Title = styled.span`
  width: auto;
  border-bottom: 8px solid ${props => props.theme.colors.light.lightBlue};

  font-size: 30px;
  font-weight: bold;

  color: #333;

  text-transform: uppercase;
`;

export const ParceirosDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  width: 45%;

  margin-top: 25px;
`;

export const Parceiro = styled.span`
  width: 150px;
  height: 100px;

  background: ${props => props.theme.colors.light.lightBlue};

  margin: 10px;

  transition: all 300ms ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;
