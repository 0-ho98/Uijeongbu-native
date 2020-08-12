<template>
  <div id="app">
    <app-nav></app-nav>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/app-header.vue";
import Nav from "./components/app-nav.vue";
import Main from "./components/app-main.vue";
import Footer from "./components/app-footer.vue";
export default {
  components: {
    "app-header": Header,
    "app-nav": Nav,
    "app-main": Main,
    "app-footer": Footer,
  },
};
</script>
<style>
:root {
  /* font-size */
  --title-font-size: 45px;
  --large-font-size: 20px;
  --regular-font-size: 16px;
  --small-font-size: 12px;

  /* spaceing */
  --big-spacing: 16px;
  --regular-spacing: 12px;
  --small-spacing: 8px;

  /* color */
  --black-color: black;
  --white-color: white;
  --main-color: #bcaaa4;
  --dark-main-color: #3e2723;
  --light-main-color: #d7ccc8;
}
body {
  margin: 0;
  padding: var(--small-spacing);
  box-sizing: border-box;
  font-family: "Black Han Sans", sans-serif;
  background: linear-gradient(0turn, white, #eeeeee, white);
  height: 100vh;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.shadow {
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
}
</style>
