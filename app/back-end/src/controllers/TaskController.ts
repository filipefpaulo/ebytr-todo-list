import { Request, Response } from 'express';
import { ErrorHandler } from '../helpers/ErrorHandler';
import { ITaskService } from '../services/interfaces/ITaskService';

export class TaskController {
  constructor(private taskService: ITaskService) {}

  getAllTasks = async (_req: Request, res: Response): Promise<Response> => {
    const tasks = await this.taskService.getAllTasks();
    return res.status(200).json(tasks);
  };

  getTaskById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const task = await this.taskService.getTaskById(id);
    return res.status(200).json(task);
  };

  createTask = async (req: Request, res: Response): Promise<Response> => {
    const { task, username } = req.body;

    if (!task) throw new ErrorHandler('Task is required', 401);
    if (!username) throw new ErrorHandler('Username is required', 401);

    const createdTask = await this.taskService.createTask({ task, username });
    return res.status(201).json(createdTask);
  };

  updateTask = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { task, username } = req.body;

    if (!task) throw new ErrorHandler('Task is required', 401);
    if (!username) throw new ErrorHandler('Username is required', 401);

    await this.taskService.updateTask({
      task,
      username,
      id,
    });
    return res.status(201).json('Task updated successfully');
  };

  finishTask = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await this.taskService.finishTask(id);
    return res.status(200).json('Task finished successfully');
  };

  deleteTask = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await this.taskService.deleteTask(id);
    return res.status(200).json('Task deleted successfully');
  };
}
