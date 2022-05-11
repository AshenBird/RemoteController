// import io from "socket.io-client";

const wsPathHandle = path => {
  const startWithMap = {
    "ws://": () => path,
    "/": () => `ws://${window.location.host}${path}`
  };
  for (const [start, action] of Object.entries(startWithMap)) {
    if (path.startsWith(start)) return action();
  }
  return `ws://${path}`;
};

export default (app, option = { path: "/" }) => {
  const { path = "/" } = option;
  const ws = new WebSocket(wsPathHandle(path));

  app.config.globalProperties.$socket = ws;
};
