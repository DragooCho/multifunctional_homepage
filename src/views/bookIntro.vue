<template>
  <div>
    <div
      class="book_Info"
      v-for="info in this.$store.state.bookInfo"
      :key="info.id"
    >
      <a v-bind:href="info.url" class="hoverUnderline">
        <img v-if="info.thumbnail === ''" :src="no_thumbnail_Image" />
        <img v-else :src="info.thumbnail" />
      </a>
      <div class="BookInfo container">
        <h3>
          <a class="linkUrl" v-bind:href="info.url">
            {{ info.title }}
          </a>
        </h3>

        <h4>
          <a class="grayText">출판</a>
          <a class="brueText">{{ info.publisher }}</a>
        </h4>

        <h4><a class="grayText">책소개</a></h4>
        <div class="contentsText">
          <p v-if="info.contents === ''">{{ noInfo }}</p>
          <p v-else-if="info.contents.length > 200">
            {{ info.contents.slice(0, 200) + "..." }}
          </p>
          <p v-else>{{ info.contents }}</p>
        </div>

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
import { noImage } from "../images/image_url.js";
import { currentDate } from "../function_utilities/time_utilities";

export default {
  data() {
    return {
      noInfo: `${currentDate()} 현재 책의 정보를 찾을 수 없습니다.`,
      no_sale_price: `${currentDate()} 현재 할인 예정이 없습니다.`,
      no_thumbnail_Image: `${noImage()}`,
    };
  },
  created() {
    this.$store.dispatch("FETCH_BOOK_INFO");
  },
  mounted() {},
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
  border: 1px solid #c0392b;
}
@keyframes fadeIn {
  from {
    opacity: 0.5;
  }
}

.book_Info .container {
  margin-left: 3rem;
}

.book_Info .container h4 {
  color: #bdc3c7;
}

.contentsText {
  position: relative;
  top: -0.8rem;
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
