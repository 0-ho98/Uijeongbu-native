<template>
  <div>
    <header>
      <span>고등학생 이전</span>
    </header>
    <div class="main-container">
      <div class="images-container" v-for="item in images" :key="item.id" @click="showModal = true">
        <img :src="require(`../assets/images/beforeHighSchool/${item.src}.jpg`)" alt />
        <!-- v-bind:src="require(`경로${}.jpg`)" 이렇게 하면 반복문으로 처리가능 -->
        <!-- 그냥 img src="`경로${}.jpg`" 안된다. -->
      </div>
    </div>
    <modal :propsData="srcData" v-if="showModal" @close="showModal = false">
      <h3 slot="header">custom header</h3>
    </modal>
  </div>
</template>
<script>
import Modal from "./modalImage.vue";
export default {
  data() {
    return {
      showModal: false,
      images: [
        { id: 1, src: "20131230_161238" },
        { id: 2, src: "IMG_20121110_145516" },
        { id: 3, src: "IMG_20121110_150349" },
        { id: 4, src: "IMG_20121110_151304" },
        { id: 5, src: "IMG_20121110_151323" },
        { id: 6, src: "IMG_20121110_151339" },
        { id: 7, src: "IMG_20121110_151415" },
        { id: 8, src: "IMG_20121118_131055" },
        { id: 9, src: "IMG_20121118_135646" },
        { id: 10, src: "IMG_20121215_184220" },
        { id: 11, src: "IMG_20130324_173742" },
        { id: 12, src: "IMG_20130324_173804" },
        { id: 13, src: "IMG_20130403_162508" },
        { id: 14, src: "IMG_20121215_184708" },
        { id: 15, src: "IMG_20121215_193742" },
        { id: 16, src: "IMG_20121215_195537" },
        { id: 17, src: "IMG_20121215_195620" },
      ],
      srcData: "20131230_161238",
    };
  },
  components: {
    modal: Modal,
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
header {
  text-align: center;
  font-size: var(--large-font-size);
  margin: var(--big-spacing) 0;
}
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
}
.main-container .images-container {
  width: 150px;

  height: 150px;
  border: 1.5px solid black;
  border-radius: 5px;
  margin: 2px;
}
.main-container .images-container img {
  width: 100%;
  height: 100%;
}
</style>