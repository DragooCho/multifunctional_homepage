<template>
  <div>
    <div class="button_container">
      <button class="randomDog btnStyle">개 사진 생성버튼</button>
      <button class="randomFox btnStyle">여우 사진 생성버튼</button>
      <button class="randomCat btnStyle" @click="createdCatImg">
        고양이 사진 생성버튼
      </button>
    </div>
    <div class="image_posted"></div>
  </div>
</template>

<script>
import { fetchCatsInfo } from "../api/index.js";

export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("FETCH_CATS_INFO");
  },
  mounted() {},
  methods: {
    createdCatImg() {
      fetchCatsInfo()
        .then((res) => {
          console.log(res.data.file);
          // let image = new Image(300);
          // image.src = fetchCatsInfo.data.file;
          // image_posted.appendChild(image);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
