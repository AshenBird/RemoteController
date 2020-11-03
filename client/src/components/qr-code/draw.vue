<template>
  <canvas ref="canvas"></canvas>
</template>
<script>
import QRCode from "qrcode";
export default {
  props: {
    data: {
      type: [Object, String],
      required: true
    }
  },
  watch: {
    data(n, o) {
      const { stringify: s } = JSON;
      const condition1 = typeof data === "object";
      const condition2 = s(n) === s(o);
      if (condition1 && condition2) return;
      if (n === o) return;
      // this.$nextTick().then();
      this.draw();
    }
  },
  methods: {
    draw() {
      const { canvas } = this.$refs;
      QRCode.toCanvas(canvas, this.data)
        .then(() => {
          this.$emit("success");
        })
        .catch(e => {
          this.$emit("error", e);
        });
    }
  },
  mounted() {
    this.draw();
  }
};
</script>
