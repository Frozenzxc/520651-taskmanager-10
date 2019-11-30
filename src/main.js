import {createMenuTemplate} from "./components/menu";
import {createFilterTemplate} from "./components/filter";
import {createBoardTemplate} from "./components/task-board";
import {createTaskTemplate} from "./components/task";
import {creatTaskEditTemplate} from "./components/task-editor";
import {createLoadMoreButtonTemplate} from "./components/button-load-more";
import {createSortTemplate} from "./components/sort";
import {Colors} from "./const";
import {Days} from "./const";
import {MonthNames} from "./const";
import {formatTime} from "./utils";
import {generateFilters} from "./mock/filter";
import {generateTask} from "./mock/task";
import {generateTasks} from "./mock/task";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(taskListElement, creatTaskEditTemplate());

new Array(TASK_COUNT).fill(``).forEach(() => {
  render(taskListElement, createTaskTemplate());
});

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createSortTemplate(), `afterbegin`);
render(boardElement, createLoadMoreButtonTemplate());
