<template>
  <div class="photo-container">사진 슬라이드쇼 구간</div>
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
.photo-container {
  margin: var(--regular-spacing);
  border: 1px solid black;
  height: 400px;
}
</style>