import { AbstractComponent } from "../abstract-component.js";

export class AddTaskComponent extends AbstractComponent {

  getTemplate() {
    return `<section class="addTask">
  <h2>Новая задача</h2>
  <div class="addTask_input">
    <input type="text" required placeholder="Название задачи ..." />
    <button class="addTask_button">&#43; Добавить</button>
  </div>
</section>`;
  }
};

