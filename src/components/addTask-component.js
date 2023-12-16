import { AbstractComponent } from "../abstract-component.js";
import { TasksService } from "../service/taskService.js";

export class AddTaskComponent extends AbstractComponent {
  #taskService = new TasksService();

  constructor() {
    super();
    this.getElement().addEventListener(`submit`, this.formSubmitHandler.bind(this));
  }

  getTemplate() {
    return `<section class="addTask">
  <h2>Новая задача</h2>
  <div class="addTask_input">
    <input type="text" required placeholder="Название задачи ..." />
    <button class="addTask_button">&#43; Добавить</button>
  </div>
</section>`;
  }

  formSubmitHandler(evt) {
    evt.preventDefault();

    const title = this.getInputValue();
    this.#taskService.create({ title });
    this.clearInput();
  }

  getInputValue() {
    return this.getElement().querySelector(`.addTask_input input`).value.trim();
  }

  clearInput() {
    this.getElement().querySelector(`.addTask_input input`).value = ``;
  }

};

