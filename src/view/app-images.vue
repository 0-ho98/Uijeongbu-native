<template>
  <div class="images-container">
    <ul id="before-high-school-container" class="box">
      <span class="subject-block">고등학교 이전</span>
      <li class="image-box" id="box1">
        <img src="../assets/images/beforeHighSchool/IMG_20121215_195537.jpg" alt />
      </li>
      <li class="image-box" id="box2">
        <img src="../assets/images/beforeHighSchool/IMG_20121215_184708.jpg" alt />
      </li>
      <li class="image-box" id="box3">
        <img src="../assets/images/beforeHighSchool/IMG_20121110_151415.jpg" alt />
      </li>
    </ul>
    <ul id="high-school-container" class="box">
      <span class="subject-block">고등학교</span>
      <li class="image-box" id="box1">
        <img src="../assets/images/highSchool/IMG_20160508_162754.jpg" alt />
      </li>
      <li class="image-box" id="box2">
        <img src="../assets/images/highSchool/IMG_20160508_162246.jpg" alt />
      </li>
      <li class="image-box" id="box3">
        <img src="../assets/images/highSchool/IMG_20160508_140349.jpg" alt />
      </li>
    </ul>
    <ul id="2017year-container" class="box">
      <span class="subject-block">2017년도</span>
      <li class="image-box" id="box1">
        <img src="../assets/images/2017/1485881647583.jpg" alt />
      </li>
      <li class="image-box" id="box2">
        <img src="../assets/images/2017/1486058438813.jpg" alt />
      </li>
      <li class="image-box" id="box3">
        <img src="../assets/images/2017/IMG_20170204_075554.jpg" alt />
      </li>
    </ul>
    <ul id="2018year-container" class="box">
      <span class="subject-block">2018년도</span>
      <li class="image-box" id="box1">
        <img src="../assets/images/2018/1519200122270.jpg" alt />
      </li>
      <li class="image-box" id="box2">
        <img src="../assets/images/2018/20180220_153742.jpg" alt />
      </li>
      <li class="image-box" id="box3">
        <img src="../assets/images/2018/1519029953352.jpg" alt />
      </li>
    </ul>
    <ul id="2019year-container" class="box">
      <span class="subject-block">2019년도</span>
      <li class="image-box" id="box1">
        <img src="../assets/images/2019/20190211_152534.jpg" alt />
      </li>
      <li class="image-box" id="box2">
        <img src="../assets/images/2019/20190211_152600.jpg" alt />
      </li>
      <li class="image-box" id="box3">
        <img src="../assets/images/2019/20190211_210859.jpg" alt />
      </li>
    </ul>
    <ul id="2020year-container" class="box">
      <span class="subject-block">2020년도</span>
      <li class="image-box" id="box1">
        <img src="../assets/images/2020/전역사진.jpg" alt />
      </li>
      <li class="image-box" id="box2">
        <img src="../assets/images/2020/액자.jpg" alt />
      </li>
      <li class="image-box" id="box3">
        <img src="../assets/images/2020/술자리.jpg" alt />
      </li>
    </ul>
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
.images-container {
  height: 1296px;
  margin: var(--regular-spacing);
  border: 1.5px solid black;
  border-radius: 5px;
}

/* 모든 앨범들 공통*/
.images-container .box {
  position: relative;
  height: 200px;
  padding: 0;
  list-style: none;
  margin: var(--regular-spacing);
}
.images-container .box .subject-block {
  display: inline-block;
  margin: 0 0 var(--small-spacing) var(--big-spacing);
}
.images-container .box #box1 {
  left: 0px;
  z-index: 100;
}
.images-container .box #box2 {
  left: 20px;
  z-index: 90;
}
.images-container .box #box3 {
  left: 40px;
  z-index: 80;
}
.images-container .box .image-box {
  width: 150px;
  height: 150px;
  position: absolute;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.images-container .box .image-box img {
  width: 100%;
  height: 100%;
}
</style>
