<template>
  <ASubMenu v-if="hasChidren" :key="option.path">
    <template #title>
      <component v-if="icon" :is="icon"></component>
      <span>{{ option.title }}</span>
    </template>
    <MenuItem
      v-for="item of option.children"
      :key="item.path"
      :option="item"
    ></MenuItem>
  </ASubMenu>
  <AMenuItem v-else @click="navTo" :key="option.path">
    <component v-if="icon" :is="icon"></component>
    <span>{{ option.title }}</span>
  </AMenuItem>
</template>
<script>
import { menu2Route } from "./utils";
export default {
  name: "MenuItem",
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      icon: null
    };
  },
  computed: {
    hasChidren() {
      const { children } = this.option;
      return children?.length && children.length > 0;
    }
  },
  methods: {
    navTo() {
      this.$router.push(menu2Route(this.option));
    }
  },
  async mounted() {
    this.icon = await this.option?.icon();
    console.log(this.option);
  }
};
</script>
