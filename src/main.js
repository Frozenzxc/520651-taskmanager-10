import {tasks} from "./mock/task";
import {RenderPosition, render} from "./utils/render";
import SiteMenuComponent, {MenuItem} from "./components/menu";
import FilterController from './controllers/filter';
import BoardComponent from "./components/board";
import BoardController from "./controllers/board";
import TasksModel from "./models/tasks";
import StatisticsComponent from "./components/statistics";

const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const dateTo = new Date();
const dateFrom = (() => {
  const d = new Date(dateTo);
  d.setDate(d.getDate() - 7);
  return d;
})();
const statisticsComponent = new StatisticsComponent({tasks: tasksModel, dateFrom, dateTo});

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const siteMenuComponent = new SiteMenuComponent();


render(siteHeaderElement, siteMenuComponent, RenderPosition.BEFOREEND);

const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
render(siteMainElement, statisticsComponent, RenderPosition.BEFOREEND);

const boardController = new BoardController(boardComponent, tasksModel);

statisticsComponent.hide();
boardController.render();

siteMenuComponent.setOnChange((menuItem) => {
  switch (menuItem) {
    case MenuItem.NEW_TASK:
      siteMenuComponent.setActiveItem(MenuItem.TASKS);
      statisticsComponent.hide();
      boardController.show();
      boardController.createTask();
      break;
    case MenuItem.STATISTICS:
      boardController.hide();
      statisticsComponent.show();
      break;
    case MenuItem.TASKS:
      statisticsComponent.hide();
      boardController.show();
      break;
  }
});
