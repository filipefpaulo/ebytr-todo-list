import express from 'express';
import 'express-async-errors';
import { ErrorMiddleware } from './middleware/ErrorMiddleware';
import { Routes } from './routes';
import cors from 'cors';

export class App {
  private _app: express.Express;
  private routes = new Routes();

  constructor() {
    this._app = express();
    this.config();
  }

  get app() {
    return this._app;
  }

  private config() {
    const app = this._app;

    app.use(express.json());
    app.use(cors());

    app.get('/', (_req, res) => res.status(200).send('Everything is ok!'));
    app.use(this.routes.route);

    app.use(ErrorMiddleware);
  }

  listen(PORT: number | string) {
    this._app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
}
