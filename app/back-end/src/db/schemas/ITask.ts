export interface ITaskCreate {
  username: string;
  task: string;
}

export interface ITaskUpdate extends ITaskCreate {
  id: string;
}

export interface ITask extends ITaskUpdate {
  done: boolean;
  createdAt: Date;
}
