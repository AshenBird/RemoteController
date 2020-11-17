import { isEmpty } from "@/utils/base";
// import qs from "qs";
const route2menuItem = (
  { path = "", name, redirect = "", meta, children },
  fPath = "/admin"
) => {
  const { sidebar, title = "" } = meta;
  const { icon = null, params, query } = sidebar;
  const item = {
    path: path.startsWith("/") ? path : `${fPath}/${path}`,
    name,
    icon,
    title,
    redirect,
    params,
    query
  };
  if (children && children.length > 0) {
    item.children = route2menu(children, item.path);
  }
  return item;
};

export const route2menu = (routes, fPath = "/admin") =>
  routes.map(route => route2menuItem(route, fPath));

const pathAddParams = (result, params) => {
  for (const [key, value] of Object.entries(params)) {
    result.path = result.path.replace(`:${key}`, value + "");
  }
};
// const pathAddQuery = (path, query) => `${path}?${qs.stringify(query)}`;
export const menu2Route = ({ path, params, query }) => {
  const result = { path };
  if (!isEmpty(params)) pathAddParams(result, params);
  if (!isEmpty(query)) result.query = query;
  // pathAddQuery(result, query);
  return result;
};
