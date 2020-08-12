<template>
  <main>
    <div class="photo-block">
      <div class="photo-container" :key="slideItems[0]" v-if="show[0]">
        <img src="../assets/images/산.jpg" alt="산" />
      </div>
      <div class="photo-container" :key="slideItems[1]" v-if="show[1]">
        <img src="../assets/images/술자리.jpg" alt="술자리" />
      </div>
      <div class="photo-container" :key="slideItems[2]" v-if="show[2]">
        <img src="../assets/images/액자.jpg" alt="액자" />
      </div>
      <div class="photo-container" :key="slideItems[3]" v-if="show[3]">
        <img src="../assets/images/전역사진.jpg" alt="전역사진" />
      </div>
      <div class="photo-container" :key="slideItems[4]" v-if="show[4]">
        <img src="../assets/images/주홍현빡빡이.jpg" alt="주홍현빡빡이" />
      </div>
      <div class="photo-container" :key="slideItems[5]" v-if="show[5]">
        <img src="../assets/images/턱걸이중.jpg" alt="턱걸이중" />
      </div>
    </div>
    <span class="arrowBtn" id="arrowBtn1" v-on:click="goBackSlide()">
      <i class="fas fa-chevron-left"></i>
    </span>
    <span class="arrowBtn" id="arrowBtn2" v-on:click="nextSlide()">
      <i class="fas fa-chevron-right"></i>
    </span>
  </main>
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
        "턱걸이"
      ],
      show: [true, false, false, false, false, false],
      orignalSlide: "산",
      currentSlide: "산",
      show: true,
      num: 0
    };
  },
  methods: {
    goBackSlide() {
      if (this.orignalSlide !== this.currentSlide) {
        this.show[this.num] = false;
        this.num = this.num - 1;
        let i = this.num;
        this.currentSlide = this.slideItems[i];
        this.show[i] = true;
      }
      return console.log("z");
    },
    nextSlide() {
      if (this.currentSlide !== "턱걸이") {
        this.show[this.num] = false;
        this.num = this.num + 1;
        let i = this.num;
        this.currentSlide = this.slideItems[i];
        this.show[i] = true;
        return console.log("s");
      }
    }
  }
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
  width: 30rem;
  display: flex;
  overflow-x: scroll;
  position: relative;
}
main .photo-block {
  width: 180rem;
  display: flex;
}
main .photo-container {
  width: 30rem;
  max-height: 400px;
}
main .photo-container img {
  width: 100%;
  height: 100%;
}
main .arrowBtn {
  font-size: var(--title-font-size);
  position: absolute;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
}
main #arrowBtn1 {
  left: 0;
  bottom: 50%;
  transform: translateY(50%);
}
main #arrowBtn2 {
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
}
</style>
