<template>
  <div>
    <QrCode class="qr-code" data="测试一下"></QrCode>
  </div>
</template>
<script>
import QrCode from "@/components/qr-code/draw";
export default {
  components: { QrCode }
};
</script>
<style lang="scss" scoped>
.qr-code {
  height: 100px;
  width: 100px;
}
</style>
