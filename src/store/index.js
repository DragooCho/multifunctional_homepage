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
    async FETCH_BOOK_INFO(context) {
      try {
        const res = await fetchBookinfo();
        context.commit("SET_BOOK_INFO", res.data.documents);
        console.log(res.data.documents[0]);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
