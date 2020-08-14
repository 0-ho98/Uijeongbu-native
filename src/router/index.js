import Vue from "vue";
import VueRouter from "vue-router";
// 라우터
import introduce from "../view/app-introduce.vue";
import images from "../view/app-images.vue";
import option from "../view/app-option.vue";
import main from "../view/app-main.vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: main
    },
    {
      path: "/introduce",
      component: introduce
    },
    {
      path: "/images",
      component: images
    },
    {
      path: "/option",
      component: option
    }
  ]
});
