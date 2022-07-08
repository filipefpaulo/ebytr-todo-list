import styled from 'styled-components';
import { Container } from '../components/base/Container';
import { Header } from '../components/Header';
import { Tasks } from '../components/Tasks';

const ContainerHome = styled(Container)`
  width: 100vw;
  height: 100vh;
`;

export function Home() {
  return (
    <ContainerHome>
      <Header />
      <Tasks />
    </ContainerHome>
  );
}
