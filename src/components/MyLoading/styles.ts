import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 150px;

  svg {
    color: ${p => shade(0.3, p.theme.colors.light.lightBlue)};
  }

  span {
    margin-top: 20px;
    font-weight: bold;
    font-size: 18px;
    color: ${p => shade(0.3, p.theme.colors.light.lightBlue)};

    text-transform: uppercase;
  }
`;
