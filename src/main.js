import { HeaderComponent } from './components/header-component.js';
import { AddTaskComponent } from './components/addTask-component.js';
import { TaskBoardComponent } from './components/taskBoard-component.js';
import { TaskListComponent } from './components/taskList-component.js';
import { TaskComponent } from './components/task-component.js';
import { CleanButtonComponent } from './components/cleanButton-component.js';
import { StubComponent } from './components/stub-component.js';
import { TasksService } from './service/taskService.js';
import { Constanats } from './const.js';
import { render, RenderPosition } from './render.js';

const bodyContainer = document.querySelector('body');
const mainContainer = document.querySelector('main');

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new AddTaskComponent(), mainContainer);


const taskBoardContainer = new TaskBoardComponent();
render(taskBoardContainer, mainContainer);


const taskService = new TasksService();
const boardTasks = [...taskService.getBoardTasks()];


renderTaskBoard(taskService, taskBoardContainer);

function renderTaskBoard(taskService, container) {
    Object.values(Constanats.Status).forEach((status, i) => {
        const tasksByStatus = taskService.getTasksByStatus(status);

        const taskListComponent = new TaskListComponent({ status });
        render(taskListComponent, container.getElement());

        const statusLabel = Object.values(Constanats.StatusLabel)[i];
        const taskListElement = taskListComponent.getElement().querySelector('p');
        taskListElement.textContent = statusLabel;

        if (tasksByStatus.length > 0) {
            renderTaskList(tasksByStatus, taskListComponent);
        }
        else{ 
            const stubComponent = new StubComponent();
            const taskListContainer = taskListComponent.getElement();
            render(stubComponent, taskListContainer);
        }
    });
}

function renderTaskList(tasks, taskListComponent) {
    tasks.forEach((task) => {
        const taskListContainer = taskListComponent.getElement().querySelector('ul');
        renderTask(task, taskListContainer);
    });
}

function renderTask(task, container) {
    const taskComponent = new TaskComponent(task);
    render(taskComponent, container);
}

const cleanButtonComponent = new CleanButtonComponent();
render(cleanButtonComponent, mainContainer);


// for(let i=0; i<4; i++){
//     const listComponent = new TaskListComponent();
//     render(listComponent, taskBoardContainer.getElement());
//         for(let j=0; j<3; j++){
//             render(new TaskComponent(), listComponent.getElement());
//         }
// }

























