<template>
  <div>
    <header>
      <span>고등학생 이전</span>
    </header>
    <div class="main-container">
      <div class="images-container" v-for="item in images" :key="item.id">
        <img :src="require(`../assets/images/2017/${item.src}`)" @click="item.showModal = true" alt />
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
        { id: 0, src: "170204122853.jpg", showModal: false },
        { id: 1, src: "1485881647583.jpg", showModal: false },
        { id: 2, src: "1485881668312.jpg", showModal: false },
        { id: 3, src: "1485881898132.jpg", showModal: false },
        { id: 4, src: "1485881916849.jpg", showModal: false },
        { id: 5, src: "1485881923358.jpg", showModal: false },
        { id: 6, src: "1485881932128.jpg", showModal: false },
        { id: 7, src: "1485881939524.jpg", showModal: false },
        { id: 8, src: "1485881943386.jpg", showModal: false },
        { id: 9, src: "1485881951893.jpg", showModal: false },
        { id: 10, src: "1485881990867.jpg", showModal: false },
        { id: 11, src: "1485933422794.jpg", showModal: false },
        { id: 12, src: "1485933428794.jpg", showModal: false },
        { id: 13, src: "1485933442361.jpg", showModal: false },
        { id: 14, src: "1485933520552.jpg", showModal: false },
        { id: 15, src: "1485933535575.jpg", showModal: false },
        { id: 16, src: "1485933571550.jpg", showModal: false },
        { id: 17, src: "1485933601000.jpg", showModal: false },
        { id: 18, src: "1485933625248.jpg", showModal: false },
        { id: 19, src: "1486006421563.jpg", showModal: false },
        { id: 20, src: "1486006460055.jpg", showModal: false },
        { id: 21, src: "1486058227582.jpg", showModal: false },
        { id: 22, src: "1486058319169.jpg", showModal: false },
        { id: 23, src: "1486058324303.jpg", showModal: false },
        { id: 24, src: "1486058342085.jpg", showModal: false },
        { id: 25, src: "1486058356216.jpg", showModal: false },
        { id: 26, src: "1486058423204.jpg", showModal: false },
        { id: 27, src: "1486058430267.jpg", showModal: false },
        { id: 28, src: "1486058435184.jpg", showModal: false },
        { id: 29, src: "1486058438813.jpg", showModal: false },
        { id: 30, src: "1486058440423.jpg", showModal: false },
      ],
      filePath: "2017",
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