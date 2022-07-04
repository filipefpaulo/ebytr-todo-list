import { ITaskCreate, ITaskUpdate } from '../../db/schemas/ITask';
import { ITask } from '../../db/schemas/ITask';

export interface ITaskService {
  getAllTasks(): Promise<ITask[]>;
  getTaskById(id: string): Promise<ITask>;
  createTask(task: ITaskCreate): Promise<ITask>;
  updateTask(task: ITaskUpdate): Promise<boolean>;
  finishTask(id: string): Promise<boolean>;
  deleteTask(id: string): Promise<boolean>;
}
