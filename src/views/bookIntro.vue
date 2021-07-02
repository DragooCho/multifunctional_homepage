<template>
  <div>
    <div v-for="info in bookInfo" :key="info.id">{{ info }}</div>
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
        this.bookInfo = res.data.documents[0];
      })
      .catch();
  },
};
</script>

<style></style>
