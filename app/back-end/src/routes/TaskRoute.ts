import { Router } from 'express';
import { TaskService } from '../services/TaskService';
import { TaskController } from '../controllers/TaskController';
import { TaskRepository } from '../repositories/TaskRepository';
import { prisma } from '../db/prisma';

export class TaskRoute {
  private _route = Router();
  private taskController: TaskController;

  constructor() {
    this.taskFactory();
    this.config();
  }

  get route() {
    return this._route;
  }

  private taskFactory() {
    const taskRepository = new TaskRepository(prisma);
    const taskService = new TaskService(taskRepository);
    const taskController = new TaskController(taskService);

    this.taskController = taskController;
  }

  private config() {
    const route = this._route;

    route.get('/', this.taskController.getAllTasks);
    route.get('/:id', this.taskController.getTaskById);
    route.post('/', this.taskController.createTask);
    route.put('/:id', this.taskController.updateTask);
    route.put('/:id/finish', this.taskController.finishTask);
    route.delete('/:id', this.taskController.deleteTask);
  }
}
