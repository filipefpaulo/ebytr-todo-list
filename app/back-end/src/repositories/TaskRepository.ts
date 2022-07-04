import { PrismaClient } from '@prisma/client';
import { ErrorHandler } from '../helpers/ErrorHandler';
import { ITask, ITaskCreate, ITaskUpdate } from '../db/schemas/ITask';
import { ITaskRepository } from './interfaces/ITaskRepository';

export class TaskRepository implements ITaskRepository {
  constructor(private model: PrismaClient) {}

  async getAllTasks(): Promise<ITask[]> {
    return await this.model.task.findMany();
  }

  async getTaskById(id: string): Promise<ITask> {
    const task = await this.model.task.findFirst({ where: { id } });
    if (!task) throw new ErrorHandler('Invalid task id', 401);
    return task;
  }

  async createTask(task: ITaskCreate): Promise<ITask> {
    return await this.model.task.create({ data: task });
  }

  async updateTask(task: ITaskUpdate): Promise<boolean> {
    await this.model.task.update({
      where: { id: task.id },
      data: task,
    });
    return true;
  }

  async finishTask(id: string): Promise<boolean> {
    await this.model.task.update({
      where: { id },
      data: { done: true },
    });
    return true;
  }

  async deleteTask(id: string): Promise<boolean> {
    await this.model.task.delete({ where: { id } });
    return true;
  }
}
