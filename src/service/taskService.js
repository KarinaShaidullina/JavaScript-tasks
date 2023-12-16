import { Constanats } from "../const.js";
import { tasks } from "../mock/task.js";

export class TasksService {
  #boardTasks = tasks;
  getBoardTasks() {
    return this.#boardTasks;
  }

  getTasksByStatus(status) {
    return this.#boardTasks.filter(task => task.status === status);
  }

  create(task) {
    task.id = this.generateUniqueId();
    task.status = Constanats.Status.BACKLOG;
    // Добавляем вывод в консоль
    console.log('Creating task:', task);
    this.#boardTasks.push(task);
  }

  generateUniqueId() {
    return Math.floor(Math.random() * Date.now()).toString();
  }

  remove(taskId) {
    const taskIndex = this.#boardTasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      this.#boardTasks.splice(taskIndex, 1);
    }
  }
}

