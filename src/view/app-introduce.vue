<template>
  <div class="information-container">
    <div class="introduce-container">
      <h2>소개</h2>
      <p>
        안녕하세요! 2020년 제가 vue를 입문하게 되고 처음으로 Vue-CLI를 이용해서 웹사이트를 만들어 봅니다.
        <br />이 페이지의 목적은 저의 오랜 친구들과 추억을 공유하기 위해서 만들었습니다.
        <br />이제 여행을 갈 때마다 또는 서로 좋은 일 있을 때 등등 그런 내용들이
        올라오겠네요.
      </p>
    </div>
    <div class="plan-container">
      <h2>앞으로의 계획</h2>
      <p>아직 애들과 직접적인 여행에 대한 얘기는 안했지만, 나중에 다들 직장 생기고 돈이 넉넉할 때 하고 싶은 여행이 있다.</p>
      <ol>
        <li>알프스 산맥에서 광경 보기</li>
        <div class="img-box">
          <img src="../assets/images/알프스.jpg" alt="알프스 산맥" />
        </div>
        <li>아이슬란드 여행가기</li>
        <div class="img-box">
          <img src="../assets/images/아이슬란드.jpg" alt="아이슬란드" />
        </div>
      </ol>
      <p>
        이렇게 크게 있는데 과연 몇명의 애들이 이 여행에 참여할지는 모르겠네.
        <br />앞으로 생길 계획들, 그리고 하고 싶은 여행을 하려면 열심히 프로그래밍을 해야겠다!
      </p>
      <p>나중에 도메인도 생기고, 너희들이 이 웹사이트를 보면서 과거에 뭘 했는지 일기처럼 봤으면 좋겠다.</p>
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
.information-container {
  max-width: 700px;
  margin: 0 auto;
}
.information-container .introduce-container {
  height: 250px;
  border: 1px solid black;
  padding: var(--small-spacing);
  border-radius: 5px;
  margin-top: var(--big-spacing);
}
.information-container .introduce-container h2 {
  text-align: center;
}
.information-container .introduce-container p {
  font-family: "Nanum Myeongjo", serif;
}
.information-container .plan-container {
  border: 1px solid black;
  padding: var(--small-spacing);
  border-radius: 5px;
  margin-top: var(--big-spacing);
}
.information-container .plan-container h2 {
  text-align: center;
}
.information-container .plan-container p {
  font-family: "Nanum Myeongjo", serif;
}
.information-container .plan-container ol {
  padding: 0 24px;
}
.information-container .plan-container ol .img-box {
  margin: var(--big-spacing) 0;
  width: 300px;
  height: 300px;
}
.information-container .plan-container ol .img-box img {
  width: 100%;
  height: 100%;
}
</style>
