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
const addTaskComponent = new AddTaskComponent();

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(addTaskComponent, mainContainer);

const taskBoardContainer = new TaskBoardComponent();
render(taskBoardContainer, mainContainer);

const taskService = new TasksService();
const boardTasks = [...taskService.getBoardTasks()];

const cleanButtonComponent = new CleanButtonComponent();
render(cleanButtonComponent, mainContainer);

renderTaskBoard(taskService, taskBoardContainer);

function renderTaskBoard(taskService, container) {
    Object.values(Constanats.Status).forEach((status, i) => {
        const tasksByStatus = taskService.getTasksByStatus(status);

        const taskListComponent = new TaskListComponent({ status });
        render(taskListComponent, container.getElement());

        const statusLabel = Object.values(Constanats.StatusLabel)[i];
        taskListComponent.getElement().querySelector('p').textContent = statusLabel;

        if (tasksByStatus.length > 0) {
            renderTaskList(tasksByStatus, taskListComponent);
        } else {
            render(new StubComponent(), taskListComponent.getElement());
        }
    });
}

function renderTaskList(tasks, taskListComponent) {
    tasks.forEach((task) => {
        const taskListContainer = taskListComponent.getElement().querySelector('ul');
        renderTask(task, taskListContainer);
        
        // if (task.status === Constanats.Status.BASKET) {
        //     render(cleanButtonComponent, taskListContainer);
        // }
    });
}

function renderTask(task, container) {
    const taskComponent = new TaskComponent(task);
    render(taskComponent, container);
}

document.querySelector('.addTask_button').addEventListener('click', (evt) => {
    evt.preventDefault();

    const title = addTaskComponent.getInputValue();

    // Проверяем, что поле не пустое
    if (title) {
        // Создаем новую задачу 
        const newTask = { title };
        taskService.create(newTask);

        // Очищаем поле ввода
        addTaskComponent.clearInput();

        // После добавления новой задачи, рендерим обновленную доску
        while (taskBoardContainer.getElement().firstChild) {
            taskBoardContainer.getElement().removeChild(taskBoardContainer.getElement().firstChild);
        }
        renderTaskBoard(taskService, taskBoardContainer);
    }
});

cleanButtonComponent.setClickHandler(() => {
    const basketTasks = taskService.getTasksByStatus(Constanats.Status.BASKET);

    // Удаление задач из сервиса
    basketTasks.forEach(task => taskService.remove(task.id));

    // Обновление интерфейса
    taskBoardContainer.getElement().replaceChildren();
    renderTaskBoard(taskService, taskBoardContainer);

    // Отключение кнопки
    cleanButtonComponent.getElement().disabled = true;
});


// for(let i=0; i<4; i++){
//     const listComponent = new TaskListComponent();
//     render(listComponent, taskBoardContainer.getElement());
//         for(let j=0; j<3; j++){
//             render(new TaskComponent(), listComponent.getElement());
//         }
// }


















