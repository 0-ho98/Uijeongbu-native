<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div class="image-block">
                <img :src="require(`../assets/images/${modalPath}/${modalData}`)" alt />
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  // modalData 안에는 사진 이름이 있다.
  props: ["modalData", "modalPath"],
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .modal-wrapper {
  display: table-cell;
  vertical-align: middle;
} */

.modal-container {
  max-width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}
.modal-body .image-block {
  width: 350px;
  height: 350px;
}
.modal-body .image-block img {
  width: 100%;
  height: 100%;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>