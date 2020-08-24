<template>
  <div>
    <header>
      <span>고등학생 이전</span>
    </header>
    <div class="main-container">
      <div class="images-container">
        <img src="../assets/images/beforeHighSchool/20131230_161238.jpg" alt />
      </div>
      <div class="images-container">
        <img src="../assets/images/beforeHighSchool/IMG_20121110_145516.jpg" alt />
      </div>
      <div class="images-container">
        <img src="../assets/images/beforeHighSchool/IMG_20121110_150349.jpg" alt />
      </div>
      <div class="images-container">
        <img src="../assets/images/beforeHighSchool/IMG_20121110_151304.jpg" alt />
      </div>
      <div class="images-container">
        <img src="../assets/images/beforeHighSchool/IMG_20121110_151323.jpg" alt />
      </div>
      <div class="images-container">
        <img src="../assets/images/beforeHighSchool/IMG_20121110_151339.jpg" alt />
      </div>
      <div class="images-container">
        <img src="../assets/images/beforeHighSchool/IMG_20121110_151415.jpg" alt />
      </div>
      <div class="images-container">
        <img src="../assets/images/beforeHighSchool/IMG_20121118_131055.jpg" alt />
      </div>
      <div class="images-container">
        <img src="../assets/images/beforeHighSchool/IMG_20121118_135646.jpg" alt />
      </div>
      <div class="images-container">
        <img src="../assets/images/beforeHighSchool/IMG_20121215_184220.jpg" alt />
      </div>
    </div>
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
header {
  text-align: center;
  font-size: var(--large-font-size);
  margin-top: var(--big-spacing);
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