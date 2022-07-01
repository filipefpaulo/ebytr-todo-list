import express from 'express';

export class App {
  private _app: express.Express;

  constructor() {
    this._app = express();
    this.config();
  }

  private config() {
    const app = this._app;

    app.use(express.json());

    app.get('/', (_req, res) => res.status(200).send('Everything is ok!'));
  }

  listen(PORT: number | string) {
    this._app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
}
