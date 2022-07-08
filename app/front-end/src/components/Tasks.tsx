import { useContext } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../context/TaskProvider';
import { Container } from './base/Container';
import { TaskCard } from './TaskCard';

const TasksContainer = styled(Container)`
  width: 80vw;
  flex-direction: column;
  padding: 50px;
  border-radius: 50px;
  border: 2px solid;
`;

export function Tasks() {
  const { tasks } = useContext(TaskContext);

  return (
    <TasksContainer>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </TasksContainer>
  );
}
