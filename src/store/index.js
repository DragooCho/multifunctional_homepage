import Vue from "vue";
import Vuex from "vuex";
import { fetchBookinfo } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    bookInfo: [],
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
