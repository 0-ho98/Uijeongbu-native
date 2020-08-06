<template>
  <div class="nav-container">
    <ul class="shadow" v-show="true">
      <li>
        <a href="#">소개</a>
      </li>
      <li>
        <a href="#">사진</a>
      </li>
      <li>
        <a href="#">옵션</a>
      </li>
    </ul>
    <span class="down-container">
      <i class="downBtn fas fa-caret-down"></i>
    </span>
  </div>
</template>

<script>
export default {};
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
}
.nav-container .down-container .downBtn {
  text-align: center;
  font-size: var(--large-font-size);
  padding: var(--small-spacing);
}
</style>