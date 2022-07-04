import request from 'supertest';
import { App } from '../src/app';
import { ITask } from '../src/db/schemas/ITask';

const app = new App().app;

let task: ITask;

describe('API - DB tests', () => {
  it('createTask', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({ task: 'Uma ai', username: 'Eu la' });
    task = response.body;

    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual(task);
  });

  it('createTask <empty - task>', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({ task: '', username: 'Eu la' });

    expect(response.statusCode).toEqual(401);
    expect(response.body).toEqual('Task is required');
  });

  it('createTask <empty - task>', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({ task: 'Uma ai', username: '' });

    expect(response.statusCode).toEqual(401);
    expect(response.body).toEqual('Username is required');
  });

  it('getAllTasks', async () => {
    const response = await request(app).get('/tasks');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([task]);
  });

  it('getTaskById', async () => {
    const response = await request(app).get(`/tasks/${task.id}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(task);
  });

  it('updateTask', async () => {
    const response = await request(app)
      .put(`/tasks/${task.id}`)
      .send({ task: 'Uma la', username: 'Eu ai' });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual('Task updated successfully');
  });

  it('updateTask <empty - task>', async () => {
    const response = await request(app)
      .put(`/tasks/${task.id}`)
      .send({ task: '', username: 'Eu ai' });

    expect(response.statusCode).toEqual(401);
    expect(response.body).toEqual('Task is required');
  });

  it('updateTask <empty - username>', async () => {
    const response = await request(app)
      .put(`/tasks/${task.id}`)
      .send({ task: 'Uma la', username: '' });

    expect(response.statusCode).toEqual(401);
    expect(response.body).toEqual('Username is required');
  });

  it('updateTask <invalid - id>', async () => {
    const response = await request(app)
      .put('/tasks/invalidId')
      .send({ task: 'Uma la', username: 'Eu ai' });

    expect(response.statusCode).toEqual(401);
    expect(response.body).toEqual('Invalid task id');
  });

  it('finishTask', async () => {
    const response = await request(app).put(`/tasks/${task.id}/finish`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual('Task finished successfully');
  });

  it('finishTask <invalid - id>', async () => {
    const response = await request(app).put('/tasks/invalidId/finish');

    expect(response.statusCode).toEqual(401);
    expect(response.body).toEqual('Invalid task id');
  });

  it('deleteTask', async () => {
    const response = await request(app).delete(`/tasks/${task.id}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual('Task deleted successfully');
  });

  it('deleteTask <invalid - id>', async () => {
    const response = await request(app).delete('/tasks/invalidId');

    expect(response.statusCode).toEqual(401);
    expect(response.body).toEqual('Invalid task id');
  });
});
