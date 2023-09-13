import { StateTask } from "../enum/state-task";

export interface TaskI {
    id : number;
    name : string;
    state : StateTask;
}
