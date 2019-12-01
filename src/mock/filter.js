const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`
];

const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10),
    };
  });
};

const filters = generateFilters();

export {filters};
