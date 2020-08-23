import Vue from "vue";
import VueRouter from "vue-router";
// 라우터
import introduce from "../view/app-introduce.vue";
import images from "../view/app-images.vue";
import option from "../view/app-option.vue";
import main from "../view/app-main.vue";
import beeforeHighSchool from "../view/before-high-school.vue";
import HighSchool from "../view/high-school.vue";
import app2017 from "../view/2017.vue";
import app2018 from "../view/2018.vue";
import app2019 from "../view/2019.vue";
import app2020 from "../view/2020.vue";
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
      component: images,
      children: [
        {
          path: "before-high-school",
          component: beeforeHighSchool
        },
        {
          path: "high-school",
          component: HighSchool
        },
        {
          path: "2017",
          component: app2017
        },
        {
          path: "2018",
          component: app2018
        },
        {
          path: "2019",
          component: app2019
        },
        {
          path: "2020",
          component: app2020
        }
      ]
    },
    {
      path: "/option",
      component: option
    }
  ]
});
