import { ITask, ITaskCreate, ITaskUpdate } from '../../db/schemas/ITask';

export interface ITaskRepository {
  getAllTasks(): Promise<ITask[]>;
  getTaskById(id: string): Promise<ITask>;
  createTask(task: ITaskCreate): Promise<ITask>;
  updateTask(task: ITaskUpdate): Promise<boolean>;
  finishTask(id: string): Promise<boolean>;
  deleteTask(id: string): Promise<boolean>;
}
