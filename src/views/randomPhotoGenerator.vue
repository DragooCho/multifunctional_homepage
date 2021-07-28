<template>
  <div>
    <div class="button_container">
      <button class="randomDog btnStyle" @click="createdDogImg">
        개 사진 생성버튼
      </button>
      <button class="randomFox btnStyle" @click="createdFoxImg">
        여우 사진 생성버튼
      </button>
      <button class="randomCat btnStyle" @click="createdCatImg">
        고양이 사진 생성버튼
      </button>
    </div>
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
import { fetchCatsInfo, fetchDogsInfo, fetchFoxsInfo } from "../api/index.js";

export default {
  data() {
    return {
      Img: "test",
      animalImgs: [],
      dogVideos: [],
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
          this.Img = res.data.file;
          this.animalImgs.push(this.Img);

          window.scrollBy(0, 1500);
        })
        .catch((error) => {
          console.log(error, "에러");
        });
    },
    createdDogImg() {
      fetchDogsInfo()
        .then((res) => {
          const Ex = res.data.url;
          let fileNameEx = this.urlParseEx(Ex);
          console.log(fileNameEx);
          this.Img = res.data.url;
          if (fileNameEx === "mp4" || fileNameEx === "webm") {
            this.dogVideos.push(this.Img);
          } else {
            this.animalImgs.push(this.Img);
          }

          window.scrollBy(0, 1500);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createdFoxImg() {
      fetchFoxsInfo()
        .then((res) => {
          // console.log(res.data.image);
          this.Img = res.data.image;
          this.animalImgs.push(this.Img);

          window.scrollBy(0, 1500);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    urlParseEx(img) {
      const parseUrl = img.split(".");
      const nameExValue = parseUrl[parseUrl.length - 1];
      return nameExValue;
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
.image_test {
  width: 300px;
}
</style>
