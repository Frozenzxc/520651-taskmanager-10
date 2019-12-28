import {tasks} from "./mock/task";
import {RenderPosition, render} from "./utils/render";
import SiteMenuComponent from "./components/menu";
import FilterController from './controllers/filter';
import BoardComponent from "./components/board";
import BoardController from "./controllers/board";
import TasksModel from "./models/tasks";

const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const siteMenuComponent = new SiteMenuComponent();

siteMenuComponent.getElement().querySelector(`.control__label--new-task`)
  .addEventListener(`click`, () => {
    boardController.createTask();
  });

render(siteHeaderElement, siteMenuComponent, RenderPosition.BEFOREEND);

const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const boardController = new BoardController(boardComponent, tasksModel);

boardController.render();
