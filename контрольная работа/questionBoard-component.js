import { createElement } from "./render.js";


function createQuestionBoardComponentTemplate() {
    return (
        `<div class="accordion"></div>`
    );
}

export class QuestionBoardComponent {

    getTemplate() {
        return createQuestionBoardComponentTemplate();
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