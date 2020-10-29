export default (app, components) => {
  for (const { name, component } of components) {
    app.component(`Ink${name}`, component);
  }
};
