<template>
  <ALayoutSider
    :collapsed="collapsed"
    @update:collapsed="onCollapsed"
    :trigger="null"
    collapsible
  >
    <div class="logo" />
    <AMenu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
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
  </ALayoutSider>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons-vue";
// import { route2menu } from "./utils";
// import { staticRoutes } from "@/router/admin/index";
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
    // menuLits() {
    //   return route2menu(staticRoutes);
    // },
    collapsed() {
      return this.$store.getters.collapsed;
    }
  },
  methods: {
    onCollapsed(status) {
      this.$store.dispatch("SidebarCollapse", { status });
    }
  }
};
</script>
