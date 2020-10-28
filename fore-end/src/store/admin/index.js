import { createStore } from "vuex";

const SIDEBAR_COLLAPSED = "SIDEBAR_COLLAPSED";

export default createStore({
  state: {
    collapsed: false
  },
  mutations: {
    SIDEBAR_COLLAPSED(state, status) {
      state.collapsed = status;
    }
  },
  actions: {
    SidebarCollapse({ commit }, { status }) {
      commit(SIDEBAR_COLLAPSED, status);
    }
  },
  getters: {
    collapsed: state => state.collapsed
  }
});
