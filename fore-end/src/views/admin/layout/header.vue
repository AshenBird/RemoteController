<template>
  <ALayoutHeader style="background: #fff; padding: 10px 15px">
    <MenuUnfoldOutlined v-if="collapsed" class="trigger" @click="collapse" />
    <MenuFoldOutlined v-else class="trigger" @click="collapse" />
  </ALayoutHeader>
</template>
<script>
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },

  computed: {
    collapsed() {
      return this.$store.getters.collapsed;
    }
  },
  methods: {
    collapse() {
      const status = !this.$store.getters.collapsed;
      this.$store.dispatch("SidebarCollapse", { status });
    }
  }
};
</script>
