import { Router } from 'express';
import { TaskRoute } from './TaskRoute';

export class Routes {
  private _route = Router();
  private task = new TaskRoute();

  constructor() {
    this.config();
  }

  get route() {
    return this._route;
  }

  private config() {
    const route = this._route;

    route.use('/tasks', this.task.route);
  }
}
