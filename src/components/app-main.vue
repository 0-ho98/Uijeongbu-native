<template>
  <transition-group tag="main" name="slideShow">
    <div class="photo-container" :key="slideItems[0]">
      <img src="../assets/images/산.jpg" alt="산" />
    </div>
    <div class="photo-container" :key="slideItems[1]">
      <img src="../assets/images/술자리.jpg" alt="술자리" />
    </div>
    <div class="photo-container" :key="slideItems[2]">
      <img src="../assets/images/액자.jpg" alt="액자" />
    </div>
    <div class="photo-container" :key="slideItems[3]">
      <img src="../assets/images/전역사진.jpg" alt="전역사진" />
    </div>
    <div class="photo-container" :key="slideItems[4]">
      <img src="../assets/images/주홍현빡빡이.jpg" alt="주홍현빡빡이" />
    </div>
    <div class="photo-container" :key="slideItems[5]">
      <img src="../assets/images/턱걸이중.jpg" alt="턱걸이중" />
    </div>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {
      slideItems: [
        "산",
        "술자리",
        "액자",
        "전역사진",
        "주홍현빡빡이",
        "턱걸이",
      ],
    };
  },
  created() {
    for (i = 0; i < this.slideItems; i++) {}
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
main {
  margin: var(--regular-spacing) auto;
  border: 1px solid black;
  height: 400px;
  border-radius: 10px;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
main .photo-container {
  margin: var(--regular-spacing);
  max-height: 500px;
  position: absolute;
  z-index: 0;
  opacity: 0;
  transition: all ease-in-out 0.5s;
}
main .photo-container img {
  width: 100%;
  height: 100%;
}
</style>