import Vue from "vue";
import Vuex from "vuex";
import { fetchBookinfo, fetchCatsInfo } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    bookInfo: [],
    catImgUrl: [],
  },
  mutations: {
    SET_BOOK_INFO(state, bookInfo) {
      state.bookInfo = bookInfo;
    },
    SET_CATS_INFO(state, catImgUrl) {
      state.catImgUrl = catImgUrl;
    },
  },
  actions: {
    FETCH_BOOK_INFO(context) {
      fetchBookinfo()
        .then((res) => {
          context.commit("SET_BOOK_INFO", res.data.documents);
          console.log(typeof res.data.documents[0].contents);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_CATS_INFO(context) {
      fetchCatsInfo()
        .then((res) => {
          console.log(res.data.url);
          context.commit("SET_CATS_INFO", res.data.url);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
