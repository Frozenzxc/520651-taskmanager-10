import {filters} from "./mock/filter";
import {tasks} from "./mock/task";
import {RenderPosition, render} from "./utils/render";
import SiteMenuComponent from "./components/menu";
import FilterComponent from "./components/filter";
import BoardComponent from "./components/board";
import BoardController from "./controller/board";

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);

render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const boardController = new BoardController(boardComponent);

boardController.render(tasks);
