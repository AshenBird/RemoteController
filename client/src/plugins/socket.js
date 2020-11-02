import io from "socket.io-client";

export default (app, option = {}) => {
  const { url = window.location, options = {} } = option;
  const soccket = io(url, options);
  app.config.globalProperties.$socket = soccket;
};
