<template>
  <ALayout id="components-layout-demo-custom-trigger">
    <Sidebar></Sidebar>
    <ALayout>
      <Header></Header>
      <ALayoutContent
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <RouterView></RouterView>
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>
<script>
import Sidebar from "./Sidebar/index";
import Header from "./header";

export default {
  components: {
    Sidebar,
    Header
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
