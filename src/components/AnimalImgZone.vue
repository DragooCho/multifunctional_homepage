<template>
  <div>
    <img
      class="image_posted"
      v-for="Img in animalImgs"
      :key="Img.id"
      :src="`${Img}`"
      alt="귀여운 동물 사진"
    />
    <video
      class="image_posted"
      v-for="Img in dogVideos"
      :key="Img.id"
      :src="`${Img}`"
      autoplay="true"
      loop="true"
      alt="귀여운 개 영상"
    ></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animalImgs: [],
      dogVideos: [],
    };
  },
};
</script>

<style scoped>
.image_posted {
  position: relative;
  top: 100px;
  width: 300px;
  z-index: 0;
}
</style>
