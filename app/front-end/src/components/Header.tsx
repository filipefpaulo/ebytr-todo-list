import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TaskContext } from '../context/TaskProvider';
import { Button } from './base/Button';
import { Container } from './base/Container';
import { HeroTitle } from './HeroTitle';

const HeaderContainer = styled(Container)`
  width: 100vw;
  height: 60px;
  background-color: #036b52;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: fixed;
  top: 0;

  p {
    font-size: 16px;
  }
`;

export function Header() {
  const navigate = useNavigate();
  const { name } = useContext(TaskContext);

  return (
    <HeaderContainer>
      <p>{name}</p>
      <HeroTitle />
      <Button type="button" onClick={() => navigate('/')}>
        Sair
      </Button>
    </HeaderContainer>
  );
}
