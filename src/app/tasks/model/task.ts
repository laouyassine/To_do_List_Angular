import { StateTask } from "../enum/state-task";
import { TaskI } from "../interface/task-i";

export class Task implements TaskI {
    id!: number;
    name!:string;
    state = StateTask.COMPLETED;
  completed: any;
    
    constructor(obj?: Partial<Task>) {
      if (obj) {
        Object.assign(this, obj);
      }
    }
}

