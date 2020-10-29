// const hasChildren = route => route.children && route.children.length > 0;

const route2menuItem = ({ path = "", name, redirect = "", meta, children }) => {
  const { icon = "", title = "" } = meta;
  const item = {
    path,
    name,
    icon,
    title,
    redirect
  };
  if (children && children.length > 0) {
    item.children = route2menu(children);
  }
  return item;
};

export const route2menu = routes => routes.map(route => route2menuItem(route));
