<template>
  <div :id="id">
    <!-- <canvas ref="canvas"></canvas> -->
    <video autoplay class="qc-code-reader-video" ref="video"></video>
    <button @click="showVideo">录制视频</button>
  </div>
</template>
<script>
export default {
  data() {
    const id = "QrCodeReader" + Math.round(Math.random() * 1000);
    return {
      id,
      isVideoShow: false
    };
  },
  methods: {
    getVideoDevices() {
      console.log(document.mediaDevices);
      // navigator.getUserMedia =
      //   navigator?.mediaDevices?.getUserMedia ||
      //   navigator.getUserMedia ||
      //   navigator.webkitGetUserMedia ||
      //   navigator.mozGetUserMedia ||
      //   navigator.msGetUserMedia;
      //   if (navigator.getUserMedia) {
      //     return navigator.getUserMedia({
      //       video: true,
      //       audio: false
      //     });
      //   } else {
      //     return Promise.reject();
      //   }
    },
    showVideo() {
      // let streaming = false;
      console.log("???");
      const { video } = this.$refs;
      this.getVideoDevices();
      // .then(stream => {
      //   if (video.srcObject !== undefined) {
      //     video.srcObject = stream;
      //   } else if (video.mozSrcObject !== undefined) {
      //     video.mozSrcObject = stream;
      //   } else if (window.URL.createObjectURL) {
      //     video.src = window.URL.createObjectURL(stream);
      //   } else if (window.webkitURL) {
      //     video.src = window.webkitURL.createObjectURL(stream);
      //   } else {
      //     video.src = stream;
      //   }
      //   video.autoplay = true;
      // })
      // .catch(e => {
      //   console.log(e);
      // });
      video.addEventListener("cabplay", () => {
        console.log(video);
      });
      this.isVideoShow = true;
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
.qc-code-reader-video {
  // height: 100vh;
  // width: 100vw;
}
</style>
<doc>
通过摄像头识别二维码的组件
</doc>
