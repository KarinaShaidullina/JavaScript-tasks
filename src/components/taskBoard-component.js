import { AbstractComponent } from '../abstract-component.js';

export class TaskBoardComponent extends AbstractComponent {
  getTemplate() {
    return `<section class="tasks_container"></section>`;
  }
}

