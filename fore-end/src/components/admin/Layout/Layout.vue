<template>
  <section class="ink--layout" :class="classes">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "Layout",
  props: {
    type: {
      type: String,
      default: "col",
      validator: v => {
        return ["row", "col"].includes(v);
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return `ink--layout-${this.type}`;
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
.ink--layout {
  display: flex;
  flex: auto;
  &.ink--layout-col {
    flex-direction: column;
    width: 100%;
  }

  &.ink--layout-row {
    flex-direction: row;
    height: 100%;
  }
}
</style>
