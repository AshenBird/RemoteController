import { createStore } from "vuex";

const SIDEBAR_COLLAPSED = "SIDEBAR_COLLAPSED";
const UPDATE_ROUTES = "UPDATE_ROUTES";

export default createStore({
  state: {
    collapsed: false,
    routes: []
  },
  mutations: {
    SIDEBAR_COLLAPSED(state, status) {
      state.collapsed = status;
    },
    UPDATE_ROUTES(state, routes) {
      state.routes = routes;
    }
  },
  actions: {
    SidebarCollapse({ commit }, { status }) {
      commit(SIDEBAR_COLLAPSED, status);
    },
    UpdateRoutes({ commit }, routes) {
      commit(UPDATE_ROUTES, routes);
    }
  },
  getters: {
    collapsed: state => state.collapsed,
    routes: state => state.routes
  }
});
