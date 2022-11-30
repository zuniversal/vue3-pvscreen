<template>
  <div class='modal'	>
    <!-- {onClose && (
      <div className={styles.close} onClick={onClose}>
        x
      </div>
    )}
    {children} -->
    <img src="@/resource/images/screen/info.png" alt="">
  </div>
</template>

<script >
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
    };
  },
});
</script>

<style lang='less' scoped>
.modal {
  background-image: url("../../resource//images/screen/modal_bg.png");
  background-color: #000b13;
  padding: 20px;
  color: #ffffff;
  position: relative;
  border: 2px solid #087c77;
  pointer-events: all;
}

.close {
  text-align: right;
  cursor: pointer;
  // color: @color-active;
  position: absolute;
  right: 16px;
  top: 5px;
}

</style>