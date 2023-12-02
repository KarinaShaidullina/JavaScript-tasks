import { AbstractComponent } from "../abstract-component.js";

export class CleanButtonComponent extends AbstractComponent {

  getTemplate() {
    return `<button class="clean_btn">&#10005; Очистить</button>`;
  }
};

