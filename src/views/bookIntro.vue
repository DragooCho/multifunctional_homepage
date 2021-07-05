<template>
  <div>
    <div class="book_Info" v-for="info in bookInfo" :key="info.id">
      <a v-bind:href="info.url" class="hoverUnderline">
        <img :src="info.thumbnail" @error="no_image" />
      </a>
      <div class="container">
        <h3>
          <a class="linkUrl" v-bind:href="info.url">
            {{ info.title }}
          </a>
        </h3>
        <h4>
          <a class="grayText">출판</a>
          <a class="brueText">{{ info.publisher }}</a>
        </h4>
        <p v-if="info.contents === ''">{{ noInfo }}</p>
        <p v-else>
          {{ info.contents.slice(0, 200) + "..." }}
        </p>
        <p><a class="grayText">정가</a> {{ info.price }} 원</p>
        <p v-if="info.sale_price === -1">
          <a class="grayText">할인가</a> {{ no_sale_price }}
        </p>
        <p v-else><a class="grayText">할인가</a> {{ info.sale_price }} 원</p>
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
        console.log(this.bookInfo[0]);
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
  margin: 0rem 7rem 1rem 7rem;
  border-bottom: 1px solid #bdc3c7;
  align-items: center;
}

.book_Info img {
  border: 1px solid #34495e;
  width: 120px;
  height: 174px;
}
.book_Info img:hover {
  animation: fadeIn 1s infinite alternate;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
}

.book_Info .container {
  margin-left: 3rem;
}

.book_Info .container h4 {
  color: #bdc3c7;
}

.brueText {
  margin-left: 0.5rem;
  color: #2980b9;
}

.container .linkUrl:hover {
  color: #2c3ecc;
  text-decoration: underline;
}

.container .linkUrl {
  color: #2c3e50;
  text-decoration: none;
}
.grayText {
  color: #7f8c8d;
}
</style>
