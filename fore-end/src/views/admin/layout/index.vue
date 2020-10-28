<template>
  <ALayout id="components-layout-demo-custom-trigger">
    <ALayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
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
    <ALayout>
      <ALayoutHeader style="background: #fff; padding: 10px 15px">
        <MenuUnfoldOutlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <MenuFoldOutlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </ALayoutHeader>
      <ALayoutContent
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        Content
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons-vue";

export default {
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  data() {
    return {
      selectedKeys: ["1"],
      collapsed: false
    };
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
