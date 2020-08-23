<template>
  <div class="images-container">
    <div class="routerLink-block" v-if="blockFlag">
      <router-link to="/images/before-high-school">
        <ul
          id="before-high-school-container"
          class="box"
          v-on:mouseover="flag1=false"
          @mouseout="flag1=true"
          :key="images[0]"
          @click="blockFlag=!blockFlag"
        >
          <span class="subject-block">고등학교 이전</span>
          <li class="image-box box1">
            <img src="../assets/images/beforeHighSchool/IMG_20121215_195537.jpg" alt />
          </li>
          <li class="image-box" :class="{movement1: !flag1, box2:flag1}">
            <img src="../assets/images/beforeHighSchool/IMG_20121215_184708.jpg" alt />
          </li>
          <li class="image-box" :class="{movement2: !flag1, box3:flag1}">
            <img src="../assets/images/beforeHighSchool/IMG_20121110_151415.jpg" alt />
          </li>
        </ul>
      </router-link>
      <router-link to="/images/high-school">
        <ul
          id="high-school-container"
          class="box"
          v-on:mouseover="flag2=false"
          @mouseout="flag2=true"
          :key="images[1]"
          @click="blockFlag=!blockFlag"
        >
          <span class="subject-block">고등학교</span>
          <li class="image-box box1">
            <img src="../assets/images/highSchool/IMG_20160508_162754.jpg" alt />
          </li>
          <li class="image-box" :class="{movement1: !flag2, box2:flag2}">
            <img src="../assets/images/highSchool/IMG_20160508_162246.jpg" alt />
          </li>
          <li class="image-box" :class="{movement2: !flag2, box3:flag2}">
            <img src="../assets/images/highSchool/IMG_20160508_140349.jpg" alt />
          </li>
        </ul>
      </router-link>
      <router-link to="/images/app2017">
        <ul
          id="2017year-container"
          class="box"
          v-on:mouseover="flag3=false"
          @mouseout="flag3=true"
          :key="images[2]"
          @click="blockFlag=!blockFlag"
        >
          <span class="subject-block">2017년도</span>
          <li class="image-box box1">
            <img src="../assets/images/2017/1485881647583.jpg" alt />
          </li>
          <li class="image-box" :class="{movement1: !flag3, box2:flag3}">
            <img src="../assets/images/2017/1486058438813.jpg" alt />
          </li>
          <li class="image-box" :class="{movement2: !flag3, box3:flag3}">
            <img src="../assets/images/2017/IMG_20170204_075554.jpg" alt />
          </li>
        </ul>
      </router-link>
      <router-link to="/images/app2018">
        <ul
          id="2018year-container"
          class="box"
          v-on:mouseover="flag4=false"
          @mouseout="flag4=true"
          :key="images[3]"
          @click="blockFlag=!blockFlag"
        >
          <span class="subject-block">2018년도</span>
          <li class="image-box box1">
            <img src="../assets/images/2018/1519200122270.jpg" alt />
          </li>
          <li class="image-box" :class="{movement1: !flag4, box2:flag4}">
            <img src="../assets/images/2018/20180220_153742.jpg" alt />
          </li>
          <li class="image-box" :class="{movement2: !flag4, box3:flag4}">
            <img src="../assets/images/2018/1519029953352.jpg" alt />
          </li>
        </ul>
      </router-link>
      <router-link to="/images/app2019">
        <ul
          id="2019year-container"
          class="box"
          v-on:mouseover="flag5=false"
          @mouseout="flag5=true"
          :key="images[4]"
          @click="blockFlag=!blockFlag"
        >
          <span class="subject-block">2019년도</span>
          <li class="image-box box1">
            <img src="../assets/images/2019/20190211_152534.jpg" alt />
          </li>
          <li class="image-box" :class="{movement1: !flag5, box2:flag5}">
            <img src="../assets/images/2019/20190211_152600.jpg" alt />
          </li>
          <li class="image-box" :class="{movement2: !flag5, box3:flag5}">
            <img src="../assets/images/2019/20190211_210859.jpg" alt />
          </li>
        </ul>
      </router-link>
      <router-link to="/images/app2020">
        <ul
          id="2020year-container"
          class="box"
          v-on:mouseover="flag6=false"
          @mouseout="flag6=true"
          :key="images[5]"
          @click="blockFlag=!blockFlag"
        >
          <span class="subject-block">2020년도</span>
          <li class="image-box box1">
            <img src="../assets/images/2020/전역사진.jpg" alt />
          </li>
          <li class="image-box" :class="{movement1: !flag6, box2:flag6}">
            <img src="../assets/images/2020/액자.jpg" alt />
          </li>
          <li class="image-box" :class="{movement2: !flag6, box3:flag6}">
            <img src="../assets/images/2020/술자리.jpg" alt />
          </li>
        </ul>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [0, 1, 2, 3, 4, 5],
      flag1: true,
      flag2: true,
      flag3: true,
      flag4: true,
      flag5: true,
      flag6: true,
      blockFlag: true,
    };
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
/* 사진들 옮기게 해줄 class선택자 */
.images-container {
  height: 1296px;
  margin: var(--regular-spacing);
  border: 1.5px solid black;
  border-radius: 5px;
  overflow-x: scroll;
}

/* 모든 앨범들 공통*/
.images-container .box {
  width: 200px;
  position: relative;
  height: 200px;
  padding: 0;
  list-style: none;
  margin: var(--regular-spacing);
}
.images-container .box .subject-block {
  display: inline-block;
  margin: 0 0 var(--small-spacing) var(--big-spacing);
  color: var(--black-color);
}
.images-container .box .subject-block:active {
  color: var(--black-color);
}
.images-container .box .box1 {
  left: 0px;
  z-index: 100;
}
.images-container .box .box2 {
  left: 20px;
  z-index: 90;
}
.images-container .box .box3 {
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
.images-container .box .movement1 {
  left: 170px;
}
.images-container .box .movement2 {
  left: 340px;
}
</style>
