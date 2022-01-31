export interface ITask {
    id: string;
    title: string;
  }

export interface ITaskProvider{
    TaskList: Array<Task>;
    setTaskList: React.Dispatch<React.SetStateAction<Array<Task>>>
}

