<template>
  <div>
    <header>
      <span>고등학생</span>
    </header>
    <div class="main-container">
      <div class="images-container" v-for="item in images" :key="item.id">
        <img
          :src="require(`../assets/images/highSchool/${item.src}`)"
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
        // { id: 0, src: "1444376951639.JPEG", showModal: false },
        // { id: 1, src: "1444376972087.jpeg", showModal: false },
        // { id: 2, src: "1444376973861.jpeg", showModal: false },
        // { id: 3, src: "1444376975245.jpeg", showModal: false },
        // { id: 4, src: "1444376979419.jpeg", showModal: false },
        // { id: 5, src: "1444377009618.jpeg", showModal: false },
        // { id: 6, src: "1444377013410.jpeg", showModal: false },
        // { id: 7, src: "1444377015462.jpeg", showModal: false },
        // { id: 8, src: "1444377018071.jpeg", showModal: false },
        // { id: 9, src: "1444377020291.jpeg", showModal: false },
        // { id: 10, src: "1444377024722.jpeg", showModal: false },
        // { id: 11, src: "1444377027332.jpeg", showModal: false },
        // { id: 12, src: "1444377029204.jpeg", showModal: false },
        // { id: 13, src: "1444377032471.jpeg", showModal: false },
        // { id: 14, src: "1444377037952.jpeg", showModal: false },
        // { id: 15, src: "1444377040889.jpeg", showModal: false },
        // { id: 16, src: "1444377043110.jpeg", showModal: false },
        // { id: 17, src: "1444377055495.jpeg", showModal: false },
        // { id: 18, src: "1444377062252.jpeg", showModal: false },
        // { id: 19, src: "1444377077388.jpeg", showModal: false },
        // { id: 20, src: "1444377081383.jpeg", showModal: false },
        // { id: 21, src: "1444377098625.jpeg", showModal: false },
        // { id: 22, src: "1444377100758.jpeg", showModal: false },
        // { id: 23, src: "1444377120776.jpeg", showModal: false },
        // { id: 24, src: "1444377132171.jpeg", showModal: false },
        // { id: 25, src: "1444377141745.jpeg", showModal: false },
        // { id: 26, src: "1444377148611.jpeg", showModal: false },
        // { id: 27, src: "1444377151372.jpeg", showModal: false },
        // { id: 28, src: "1444377167966.jpeg", showModal: false },
        // { id: 29, src: "1462695027950.jpeg", showModal: false },
        // { id: 30, src: "1462695041003.jpeg", showModal: false },
        // { id: 31, src: "1462695111993.jpeg", showModal: false },
        // { id: 32, src: "1462695123490.jpeg", showModal: false },
        // { id: 33, src: "1462695191599.jpeg", showModal: false },
        // { id: 34, src: "1462695216485.jpeg", showModal: false },
        // { id: 35, src: "1462695219636.jpeg", showModal: false },
        // { id: 36, src: "1462695225658.jpeg", showModal: false },
        // { id: 37, src: "1462695229492.jpeg", showModal: false },
        // { id: 38, src: "1462695258141.jpeg", showModal: false },
        // { id: 39, src: "1462699990078.jpeg", showModal: false },
        // { id: 40, src: "1462704452356.jpeg", showModal: false },
        { id: 41, src: "IMG_20160508_101728.jpg", showModal: false },
        { id: 42, src: "IMG_20151009_125145.jpg", showModal: false },
        { id: 43, src: "IMG_20160508_162002.jpg", showModal: false },
        { id: 44, src: "IMG_20160508_140415.jpg", showModal: false },
        { id: 45, src: "IMG_20160508_140349.jpg", showModal: false },
        { id: 46, src: "IMG_20160508_162754.jpg", showModal: false },
        { id: 47, src: "IMG_20160508_162514.jpg", showModal: false },
        { id: 48, src: "IMG_20160508_162219.jpg", showModal: false },
      ],
      filePath: "highSchool",
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