<template>
  <div>
    RefCom
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
console.log(' RefCom ： ',    )// 

const data = ref(1)
const childFn = () => {
  console.log(' childFn   ,   ： ', data  )
  
}
      
defineExpose({
  data,
  childFn,
})
</script>

<style>
</style>