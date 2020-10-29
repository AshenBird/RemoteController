<template>
  <a-layout-sider
    :collapsed="collapsed"
    :trigger="null"
    @updated:collapsed="onCollapsed"
    collapsible
  >
    <div class="logo" />
    <AMenu
      theme="dark"
      mode="vertical-right"
      v-model:selectedKeys="selectedKeys"
    >
      <AMenuItem key="1">
        <UserOutlined />
        <span>nav 1</span>
      </AMenuItem>
      <AMenuItem key="2">
        <VideoCameraOutlined />
        <span>nav 2</span>
      </AMenuItem>
      <AMenuItem key="3">
        <UploadOutlined />
        <span>nav 3</span>
      </AMenuItem>
    </AMenu>
  </a-layout-sider>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons-vue";
import { route2menu } from "./utils";
export default {
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
  },
  data() {
    return {
      selectedKeys: ["1"]
    };
  },
  computed: {
    collapsed() {
      return this.$store.getters.collapsed;
    },
    menuList() {
      return route2menu(this.$store.getters.routes);
    }
  },
  methods: {
    onCollapsed(status) {
      this.$store.dispatch("SidebarCollapse", { status });
    }
  },
  mounted() {
    console.log(this.menuList);
  }
};
</script>
