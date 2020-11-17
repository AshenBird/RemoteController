<template>
  <a-layout-sider
    :collapsed="collapsed"
    @update:collapsed="onCollapsed"
    collapsible
    :collapsedWidth="collapsedWidth"
  >
    <div class="logo" />
    <AMenu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <MenuItem
        v-for="item of menuList"
        :key="item.path"
        :option="item"
      ></MenuItem>
    </AMenu>
  </a-layout-sider>
</template>
<script>
import MenuItem from "./item";
import { route2menu } from "./utils";
export default {
  components: {
    MenuItem
  },
  data() {
    return {};
  },
  computed: {
    collapsedWidth() {
      return this.$store.getters.collapsedWidth;
    },
    collapsed() {
      return this.$store.getters.collapsed;
    },
    menuList() {
      return route2menu(this.$store.getters.routes);
    },
    selectedKeys: {
      get() {
        const len = this.$route.matched.length;
        const last = this.$route.matched[len - 1];
        return [last.path];
      },
      set() {}
    }
  },
  methods: {
    onCollapsed(status) {
      this.$store.dispatch("SidebarCollapse", { status });
    }
  }
};
</script>
