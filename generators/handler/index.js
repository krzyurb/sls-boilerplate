module.exports = (plop) => {
  const nameFilter = name => ({
    upper: name.charAt(0).toUpperCase() + name.slice(1),
    lower: name.charAt(0).toLowerCase() + name.slice(1),
  });

  plop.setGenerator('Handler', {
    description: 'Lambda handler',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Handler name',
        filter: nameFilter,
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/handlers/{{name.lower}}/handler.js',
        templateFile: 'generators/handler/templates/handler.hbs',
      },
      {
        type: 'add',
        path: 'src/handlers/{{name.lower}}/index.js',
        templateFile: 'generators/handler/templates/index.hbs',
      },
      {
        type: 'add',
        path: 'tests/unit/handlers/{{name.lower}}.test.js',
        templateFile: 'generators/handler/templates/unit.test.hbs',
      },
      {
        type: 'append',
        path: 'functions.yml',
        templateFile: 'generators/handler/templates/function.hbs',
      },
    ],
  });
};
