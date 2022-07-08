import React, { useEffect, useState } from 'react';
import { getAllTasks } from '../helper/taskAPI';
import { ITask } from '../interface/task.interface';

type IProps = {
  children: React.ReactNode;
};

interface ITaskContext {
  name: string;
  setName: (value: string) => void;
  tasks: ITask[];
}

export const TaskContext = React.createContext<ITaskContext>({
  name: '',
  setName() {},
  tasks: [],
});

export function TaskProvider({ children }: IProps) {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const newTasks = await getAllTasks();
      setTasks(newTasks);
    }

    getTasks();
    console.log(tasks);
  }, []);

  return (
    <TaskContext.Provider value={{ name, setName, tasks }}>
      {children}
    </TaskContext.Provider>
  );
}
