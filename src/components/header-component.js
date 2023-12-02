import { AbstractComponent } from "../abstract-component.js";

export class HeaderComponent extends AbstractComponent {

  getTemplate() {
    return `<header class="header">
              <h1>Список задач</h1>
          </header>`;
  }
};

