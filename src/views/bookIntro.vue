<template>
  <div>
    <div class="book_Info" v-for="info in bookInfo" :key="info.id">
      <h3>{{ info.title }}</h3>
      <img :src="info.thumbnail" @error="no_image" />
      <!-- <img
        :src="info.thumbnail"
        onerror="this.src='https://raw.githubusercontent.com/DragooCho/TIL/main/image/test_thumbnail.png'"
      /> -->
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      bookInfo: [],
    };
  },
  created() {
    axios
      .get("https://dapi.kakao.com/v3/search/book?target=title", {
        params: { query: "미움받을 용기" },
        headers: {
          Authorization: `KakaoAK ${process.env.VUE_APP_KAKAOAK_KEY}`,
        },
      })
      .then((res) => {
        this.bookInfo = res.data.documents;
        console.log(this.bookInfo);
      })
      .catch();
  },
  methods: {
    no_image(e) {
      e.target.src =
        "https://raw.githubusercontent.com/DragooCho/TIL/main/image/test_thumbnail.png";
    },
  },
};
</script>

<style></style>
