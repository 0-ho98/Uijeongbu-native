<template>
  <div class="nav-container">
    <transition-group name="navigation" tag="div">
      <ul class="shadow" v-if="flag" :key="navBox">
        <li v-for="navItem in navItems" :key="navItem">
          <a href="#">{{navItem}}</a>
        </li>
      </ul>
    </transition-group>

    <span class="down-container" v-on:click="flag=!flag">
      <i class="downBtn fas fa-caret-down"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      navItems: ["소개", "사진", "옵션"],
      navBox: "navBox",
    };
  },
};
</script>

<style scoped>
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
.nav-container {
  width: 100%;
  height: 8rem;
}
.nav-container ul {
  width: 17rem;
  padding-left: 0;
  display: flex;
  margin: 0 auto;
  height: 90px;
  line-height: 120px;
  justify-content: space-around;
  border: 1px solid black;
  border-top: none;
  border-radius: 0 0 10px 10px;
}
.nav-container ul li a {
  color: black;
}
.nav-container .down-container {
  display: block;
  width: 28px;
  margin: 0 auto;
  cursor: pointer;
}
.nav-container .down-container .downBtn {
  text-align: center;
  font-size: var(--large-font-size);
  padding: var(--small-spacing);
}

.navigation-enter-active,
.navigation-leave-active {
  transition: all ease-in-out 1s;
}
.navigation-enter,
.navigation-leave-to {
  transform: translateY(-100px);
}
</style>