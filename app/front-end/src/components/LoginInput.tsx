import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TaskContext } from '../context/TaskProvider';
import { Button } from './base/Button';
import { ContainerCenter } from './base/ContainerCenter';

const LoginContainer = styled(ContainerCenter)`
  margin-top: 20px;
  flex-direction: column;

  input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export function LoginInput() {
  const useNavigation = useNavigate();
  const { name, setName } = useContext(TaskContext);

  const handleSubmit = () => {
    useNavigation('/home');
  };

  return (
    <LoginContainer>
      <input
        type="text"
        placeholder="Enter your username"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Button type="button" onClick={handleSubmit} disabled={name.length < 3}>
        Entrar
      </Button>
    </LoginContainer>
  );
}
