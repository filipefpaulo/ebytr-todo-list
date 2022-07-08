import styled from 'styled-components';
import { ContainerCenter } from '../components/base/ContainerCenter';
import { HeroTitle } from '../components/HeroTitle';
import { LoginInput } from '../components/LoginInput';

const ContainerLogin = styled(ContainerCenter)`
  width: 100vw;
  height: 100vh;

  .main {
    width: 40vw;
    height: 30vh;
    background-color: #036b52;
    border-radius: 20px;
    flex-direction: column;
  }
`;

export function Login() {
  return (
    <ContainerLogin>
      <ContainerCenter className="main">
        <HeroTitle />
        <LoginInput />
      </ContainerCenter>
    </ContainerLogin>
  );
}
