import { render, RenderPosition } from './render.js';
import { TasksService } from './taskServise.js';
import { QuestionComponent } from './question-component.js';
import { QuestionBoardComponent } from './questionBoard-component.js';

const bodyContainer = document.querySelector('body');
const questionBoardComponent = new QuestionBoardComponent();
const tasksService = new TasksService();

render(questionBoardComponent, bodyContainer);

const boardQuestions = tasksService.getBoardQuestions();
for (const questionData of boardQuestions) {
    const questionComponent = new QuestionComponent(questionData);
    render(questionComponent, questionBoardComponent.getElement());
}
