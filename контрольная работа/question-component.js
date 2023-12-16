import { createElement } from "./render.js";


function createQuestionComponentTemplate(id ,title, content) {
    return (
        `<div class="accordion-item ${id}">
        <button class="accordion-button">${title}</button>
        <div class="accordion-content">
          <p>${content}</p>
        </div>
      </div>`
      );
}


export class QuestionComponent {
  #id = null;
  #content = null;
  #title = null;

    constructor({ id, title, content }) {
        this.#id = id;
        this.#title = title;
        this.#content = content;
    }

  getTemplate() {
    return createQuestionComponentTemplate(this.#id,this.#title, this.#content);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }




  removeElement() {
    this.element = null;
  }
}
