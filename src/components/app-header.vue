<template>
  <header>
    <span>의정부 토박이</span>
  </header>
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
header {
  margin-top: var(--regular-spacing);
  text-align: center;
}
header span {
  font-size: var(--title-font-size);
}
</style>