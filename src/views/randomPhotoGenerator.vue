<template>
  <div>
    <div class="button_container">
      <button class="randomDog btnStyle">개 사진 생성버튼</button>
      <button class="randomFox btnStyle">
        여우 사진 생성버튼
      </button>
      <button class="randomCat btnStyle" @click="createdCatImg">
        고양이 사진 생성버튼
      </button>
    </div>
    <img
      class="image_posted"
      v-for="Img in catImgs"
      :key="Img.id"
      :src="`${Img}`"
      alt="귀여운 고양이 사진"
    />
  </div>
</template>

<script>
import { fetchCatsInfo } from "../api/index.js";

export default {
  data() {
    return {
      Img: "https://purr.objects-us-east-1.dream.io/i/img_20170904_234535.jpg",
      catImgs: [],
    };
  },
  created() {
    this.$store.dispatch("FETCH_CATS_INFO");
  },
  mounted() {},
  methods: {
    createdCatImg() {
      fetchCatsInfo()
        .then((res) => {
          let image = res.data.file;
          this.Img = image;
          this.catImgs.push(this.Img);
          window.scrollBy(0, 1500);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.button_container {
  position: fixed;
  z-index: 1;
}
.button_container button {
  width: 17rem;
  height: 5rem;
  font-size: 1.5rem;
}
.image_posted {
  position: relative;
  top: 100px;
  width: 300px;
  z-index: 0;
}
</style>
