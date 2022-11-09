<template>
  <teleport to="body">
    <div class='box' :style='{right: `${100 + 20}px`}' >
      <div class={styles.btnScale} @click='handleScale'></div>
      <div class={styles.btnLocation} @click='handleLocation'></div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, defineProps, defineEmits, } from 'vue'
const emits = defineEmits(['handleScale', 'handleLocation'])

</script>

<style lang='less'>
@import '../../mixins.less';

.box {
  position: absolute;
  bottom: 320px;
  z-index: 1;

  z-index: 9999;
  bottom: 300px;
  right: 100px;
}
.btnScale {
  width: 41px;
  height: 41px;
  margin-bottom: 25px;
  cursor: pointer;
  .screen-bg('scale');
}
.btnLocation {
  width: 41px;
  height: 41px;
  cursor: pointer;
  .screen-bg('location');
}

</style>