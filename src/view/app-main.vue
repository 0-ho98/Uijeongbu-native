<template>
  <main>
    <transition-group tag="div" name="slide" class="photo-block">
      <div class="photo-container" :key="slideItems[0]" v-show="show[0]">
        <img src="../assets/images/2020/산.jpg" alt="산" />
      </div>
      <div class="photo-container" :key="slideItems[1]" v-show="show[1]">
        <img src="../assets/images/2020/술자리.jpg" alt="술자리" />
      </div>
      <div class="photo-container" :key="slideItems[2]" v-show="show[2]">
        <img src="../assets/images/2020/액자.jpg" alt="액자" />
      </div>
      <div class="photo-container" :key="slideItems[3]" v-show="show[3]">
        <img src="../assets/images/2020/전역사진.jpg" alt="전역사진" />
      </div>
      <div class="photo-container" :key="slideItems[4]" v-show="show[4]">
        <img src="../assets/images/2020/주홍현빡빡이.jpg" alt="주홍현빡빡이" />
      </div>
      <div class="photo-container" :key="slideItems[5]" v-show="show[5]">
        <img src="../assets/images/2020/턱걸이중.jpg" alt="턱걸이중" />
      </div>
    </transition-group>
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
      //slideItems는 transition-group를 이용하기 위해 사용하는 :key에 대한 배열이다.
      //show 배열은 사진들 중 1개를 보이게 해주고, 나머지는 안보이게 해주는 배열이다.
      //num 변수는 현재 위치를 알려주는 변수이다. 계산할 때 사용한다.
      slideItems: [
        "산",
        "술자리",
        "액자",
        "전역사진",
        "주홍현빡빡이",
        "턱걸이",
      ],
      show: [true, false, false, false, false, false],
      num: 0,
    };
  },
  methods: {
    // 뒤로 가는 함수
    goBackSlide() {
      if (this.num > 0) {
        this.show.splice(this.num, 1, false);
        this.show.splice(this.num - 1, 0, true);
        this.num--;
      }
    },
    // 다음으로 가는 함수
    nextSlide() {
      if (this.num < 5) {
        this.show.splice(this.num, 1, false);
        this.show.splice(this.num + 1, 0, true);
        this.num++;
      }
    },
  },
  // 자동으로 슬라이드쇼가 되게 끔 만들어주는 함수
  created() {
    setInterval(() => {
      if (this.num > -1 && this.num < 5) {
        this.show.splice(this.num, 1, false);
        this.show.splice(this.num + 1, 0, true);
        this.num++;
      } else {
        this.show.splice(5, 1, false);
        this.show.splice(0, 0, true);
        this.num = 0;
      }
    }, 4000);
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
.slide-enter-active {
  transition: all ease 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
main {
  margin: var(--regular-spacing) auto;
  border: 1.2px solid black;
  height: 400px;
  border-radius: 10px;
  max-width: 25rem;
  display: flex;
  position: relative;
  overflow: hidden;
}
main .photo-block {
  max-width: 150rem;
  display: flex;
}
main .photo-container {
  max-width: 25rem;
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
