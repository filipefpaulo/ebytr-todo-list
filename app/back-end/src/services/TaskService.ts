import { ITaskRepository } from '../repositories/interfaces/ITaskRepository';
import { ITask, ITaskCreate, ITaskUpdate } from '../db/schemas/ITask';
import { ITaskService } from './interfaces/ITaskService';

export class TaskService implements ITaskService {
  constructor(private taskRepository: ITaskRepository) {}

  async getAllTasks(): Promise<ITask[]> {
    return await this.taskRepository.getAllTasks();
  }

  async getTaskById(id: string): Promise<ITask> {
    return await this.taskRepository.getTaskById(id);
  }

  async createTask(task: ITaskCreate): Promise<ITask> {
    return await this.taskRepository.createTask(task);
  }

  async updateTask(task: ITaskUpdate): Promise<boolean> {
    await this.getTaskById(task.id);
    return await this.taskRepository.updateTask(task);
  }

  async finishTask(id: string): Promise<boolean> {
    await this.getTaskById(id);
    return await this.taskRepository.finishTask(id);
  }

  async deleteTask(id: string): Promise<boolean> {
    await this.getTaskById(id);
    return await this.taskRepository.deleteTask(id);
  }
}
