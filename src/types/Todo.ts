export enum TodoStatus {
  Pending = 'Pending',
  InProgress = 'inProgress',
  Completed = 'completed'
}

export interface Todo {
  id: number,
  title: string,
  description: string,
  status: TodoStatus
}

export interface Props {
  status: TodoStatus
}

export interface TodoStore {
  [TodoStatus.Pending] : Todo[]
  [TodoStatus.InProgress] : Todo[]
  [TodoStatus.Completed] : Todo[]
}
