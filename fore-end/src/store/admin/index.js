import { createStore } from "vuex";
const SIDEBAR_COLLAPSED = "SIDEBAR_COLLAPSED";
const UPDATE_ROUTES = "UPDATE_ROUTES";
const CHANGE_COLLAPSED_WIDTH = "CHANGE_COLLAPSED_WIDTH";
export default createStore({
  state: {
    collapsed: false,
    collapsedWidth: 80,
    routes: []
  },
  mutations: {
    SIDEBAR_COLLAPSED(state, status) {
      state.collapsed = status;
    },
    UPDATE_ROUTES(state, routes) {
      state.routes = routes;
    },
    CHANGE_COLLAPSED_WIDTH(state, width) {
      state.collapsedWidth = width;
    }
  },
  actions: {
    SidebarCollapse({ commit }, { status }) {
      commit(SIDEBAR_COLLAPSED, status);
    },
    UpdateRoutes({ commit }, routes) {
      commit(UPDATE_ROUTES, routes);
    },
    ChangeCollapsedWidth({ commit }, width) {
      commit(CHANGE_COLLAPSED_WIDTH, width);
    }
  },
  getters: {
    collapsed: state => state.collapsed,
    routes: state => state.routes,
    collapsedWidth: state => state.collapsedWidth
  }
});
