<template>
  <div class="footer-container">
    <span>e-mail: one0374@naver.com</span>
    <span>Copyright 2020.영호팍.All rights reserved</span>
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
.footer-container {
  margin: 40px var(--regular-spacing);
}
.footer-container span {
  font-size: var(--small-font-size);
  font-family: initial;
}
</style>