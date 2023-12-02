import { AbstractComponent } from "../abstract-component.js";

export class StubComponent extends AbstractComponent {

  getTemplate() {
      return `<li class="stub">Перетащите карточку</li>`;
  }
}