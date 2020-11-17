<template>
  <router-view />
</template>
<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
}
#app {
  height: 100%;
  overflow: hidden;
}
</style>
<docs>
  这个文件是多个入口的共用根组件文件  
  不同入口展示不同的页面是依赖挂载的不同路由实现的
</docs>
