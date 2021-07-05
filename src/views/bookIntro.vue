<template>
  <div>
    <div class="book_Info" v-for="info in bookInfo" :key="info.id">
      <img :src="info.thumbnail" @error="no_image" />
      <div class="container">
        <h3>{{ info.title }}</h3>
        <a>{{
          info.contents === "" ? noInfo : info.contents.slice(0, 200) + "..."
        }}</a>
        <p>정가: {{ info.price }} 원</p>
        <p v-if="info.sale_price === -1">할인가: {{ no_sale_price }}</p>
        <p v-else>할인가: {{ info.sale_price }} 원</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const bookSize = 10;

export default {
  data() {
    return {
      bookInfo: [],
      noInfo: "책의 정보를 찾을 수 없습니다.",
      no_sale_price: "현재 할인 예정이 없습니다.",
    };
  },
  created() {
    axios
      .get("https://dapi.kakao.com/v3/search/book?target=title", {
        params: { query: "베스트셀러", size: bookSize },
        headers: {
          Authorization: `KakaoAK ${process.env.VUE_APP_KAKAOAK_KEY}`,
        },
      })
      .then((res) => {
        this.bookInfo = res.data.documents;
        console.log(this.bookInfo[9]);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {},
  methods: {
    no_image(e) {
      e.target.src =
        "https://raw.githubusercontent.com/DragooCho/TIL/main/image/test_thumbnail.png";
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 700px) {
  .book_Info {
    flex-direction: column;
  }
}
.book_Info {
  display: flex;
  margin: 2rem 5rem;
  border-bottom: 1px solid #bdc3c7;
  align-items: center;
  /* flex-direction: column; */
}

.book_Info img {
  width: 120px;
  height: 174px;
}

.book_Info .container {
  margin-left: 3rem;
}

.book_Info .container a {
  width: 50%;
}
</style>
