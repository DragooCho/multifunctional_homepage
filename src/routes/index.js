import Vue from "vue";
import VueRouter from "vue-router";

import bookIntro from "../views/bookIntro.vue";
import imgTextEditor from "../views/imgTextEditor.vue";
import randomPhotoGenerator from "../views/randomPhotoGenerator.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/book",
    },
    {
      path: "/book",
      component: bookIntro,
    },
    {
      path: "/editor",
      component: imgTextEditor,
    },
    {
      path: "/generator",
      component: randomPhotoGenerator,
    },
  ],
});
