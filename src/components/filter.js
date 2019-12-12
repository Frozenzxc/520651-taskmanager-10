import AbstractComponent from "./abstract-component";

const createFilterMarkup = (filter, isChecked) => {
  return (
    `<input
        type="radio"
        id="filter__${filter.name}"
        class="filter__input visually-hidden"
        name="filter"
        ${isChecked ? `checked` : ``}
      />
     <label for="filter__${filter.name}" class="filter__label">
       ${filter.name} <span class="filter__${filter.name}-count">${filter.count}</span>
     </label>`
  );
};

const createFilterTemplate = (filters) => {
  const filterMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);

  return (
    `<section class="main__filter filter container">
       ${filterMarkup}
      </section>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
