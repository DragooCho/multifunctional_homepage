import Vue from "vue";
import Vuex from "vuex";
import { fetchBookinfo } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    bookInfo: [],
    // noInfo: "책의 정보를 찾을 수 없습니다.",
    no_sale_price: "현재 할인 예정이 없습니다.",
  },
  mutations: {
    SET_BOOK_INFO(state, bookInfo) {
      state.bookInfo = bookInfo;
    },
  },
  actions: {
    FETCH_BOOK_INFO(context) {
      fetchBookinfo()
        .then((res) => {
          console.log(res.data);
          context.commit("SET_BOOK_INFO", res.data.documents);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
