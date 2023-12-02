import { tasks } from "../mock/task.js";

export class TasksService {
    #boardTasks = tasks;
    getBoardTasks() {
        return this.#boardTasks;
    }
    
    getTasksByStatus(status) {
    return this.#boardTasks.filter(task => task.status === status);
  }
}

