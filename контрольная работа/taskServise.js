import { questions } from "./qestion.js";


export class TasksService {
    #boardQuestions = questions;
 
    getBoardQuestions() {
      return this.#boardQuestions;
    }
}


