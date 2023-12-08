import React from 'react'
import { Container } from './styles';
import useWindowDimensions from '../../hooks/useWindowDimensions';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Providers({ children }: { children: React.ReactNode }) {
  const { width } = useWindowDimensions(  )
  return (
    <Container width={width}>
      {children}
    </Container>
  )
}
