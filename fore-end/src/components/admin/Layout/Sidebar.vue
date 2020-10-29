<template>
  <aside class="ink-sidebar">
    <slot></slot>
  </aside>
</template>
<script>
export default {};
</script>

<style lang="scss">
.ink-sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
