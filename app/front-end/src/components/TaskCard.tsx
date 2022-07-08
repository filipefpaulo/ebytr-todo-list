import styled from 'styled-components';
import { ITask } from '../interface/task.interface';
import { Container } from './base/Container';

interface IProps {
  task: ITask;
}

const TaskCardContainer = styled(Container)`
  flex-direction: column;
  padding: 10px;
`;

export function TaskCard({ task }: IProps) {
  return (
    <TaskCardContainer>
      <p>{task.task}</p>
      <p>{task.username}</p>
    </TaskCardContainer>
  );
}
