<template>
  <InkLayout type="row">
    <!-- <ALayout> -->
    <Sidebar></Sidebar>
    <!-- <InkLayout type="col"> -->
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
    <!-- </InkLayout> -->
    <!-- </ALayout> -->
  </InkLayout>
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
