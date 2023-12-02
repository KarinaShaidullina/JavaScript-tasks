import { AbstractComponent } from "../abstract-component.js";

export class TaskListComponent extends AbstractComponent {
  constructor({ id, title, status }) {
      super();
      this._id = id;
      this._status = status;
      this._title = title;
  }

  getTemplate() {
      return `<div class="tasks">
          <div class="${this._status}">
              <p>${this._title}</p>
              <ul></ul>
          </div>
      </div>`;
  }
}



