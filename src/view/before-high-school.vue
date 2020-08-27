<template>
  <div>
    <header>
      <span>고등학생 이전</span>
    </header>
    <div class="main-container">
      <div class="images-container" v-for="item in images" :key="item.id">
        <img
          :src="require(`../assets/images/beforeHighSchool/${item.src}`)"
          @click="item.showModal = true"
          alt
        />
        <!-- v-bind:src="require(`경로${}.jpg`)" 이렇게 하면 반복문으로 처리가능 -->
        <!-- 그냥 img src="`경로${}.jpg`" 안된다. -->
        <modal
          :modalData="item.src"
          :modalPath="filePath"
          v-if="item.showModal"
          @close="item.showModal = false"
        >
          <h3 slot="header">custom header</h3>
        </modal>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "./modalImage.vue";
export default {
  //데이터를 묶어서 보내야 한다면 객체 형식의 배열로 보내는게 제일이다.
  data() {
    return {
      showModal: false,
      images: [
        { id: 0, src: "20131230_161238.jpg", showModal: false },
        { id: 1, src: "IMG_20121110_145516.jpg", showModal: false },
        { id: 2, src: "IMG_20121110_150349.jpg", showModal: false },
        { id: 3, src: "IMG_20121110_151304.jpg", showModal: false },
        { id: 4, src: "IMG_20121110_151323.jpg", showModal: false },
        { id: 5, src: "IMG_20121110_151339.jpg", showModal: false },
        { id: 6, src: "IMG_20121110_151415.jpg", showModal: false },
        { id: 7, src: "IMG_20121118_131055.jpg", showModal: false },
        { id: 8, src: "IMG_20121118_135646.jpg", showModal: false },
        { id: 9, src: "IMG_20121215_184220.jpg", showModal: false },
        { id: 10, src: "IMG_20130324_173742.jpg", showModal: false },
        { id: 11, src: "IMG_20130324_173804.jpg", showModal: false },
        { id: 12, src: "IMG_20130403_162508.jpg", showModal: false },
        { id: 13, src: "IMG_20121215_184708.jpg", showModal: false },
        { id: 14, src: "IMG_20121215_193742.jpg", showModal: false },
        { id: 15, src: "IMG_20121215_195537.jpg", showModal: false },
        { id: 16, src: "IMG_20121215_195620.jpg", showModal: false },
      ],
      filePath: "beforeHighSchool",
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