<template>
  <div>
    <div class="button_container">
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
    </div>
    <!-- <AnimalButtons /> -->

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
import { clickedWindowScroll } from "../function_utilities/window_scroll_event";
import { urlParseEx } from "../function_utilities/string_processing_utilities";
// import AnimalImgZone from "../components/AnimalImgZone.vue";

export default {
  data() {
    return {
      animalImgs: [],
      dogVideos: [],
    };
  },

  mounted() {},
  // components() {
  //   AnimalImgZone;
  // },

  methods: {
    async createdCatImg() {
      try {
        const res = await fetchCatsInfo();

        this.Img = res.data.file;
        this.animalImgs.push(this.Img);

        clickedWindowScroll(0, 1500);
      } catch (error) {
        console.log(error, "에러");
      }
    },
    async createdDogImg() {
      try {
        const res = await fetchDogsInfo();

        const Ex = res.data.url;
        let fileNameEx = urlParseEx(Ex);
        console.log(fileNameEx);
        this.Img = res.data.url;

        if (fileNameEx === "mp4" || fileNameEx === "webm") {
          this.dogVideos.push(this.Img);
        } else {
          this.animalImgs.push(this.Img);
        }

        clickedWindowScroll(0, 1500);
      } catch (error) {
        console.log(error);
      }
    },
    async createdFoxImg() {
      try {
        const res = await fetchFoxsInfo();

        this.Img = res.data.image;
        this.animalImgs.push(this.Img);

        clickedWindowScroll(0, 1500);
      } catch (error) {
        console.log(error);
      }
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
  width: 350px;
}
</style>
