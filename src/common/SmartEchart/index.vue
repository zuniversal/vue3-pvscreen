<template>
  <VChart class="chart" ref='chartRef' :option="option" :loading-options="loadingOptions" />
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, LineChart, BarChart, } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, defineComponent, onMounted, defineProps, computed, } from 'vue';
import 'echarts-liquidfill'
import debounce from 'lodash/debounce';
import common from './common';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  LineChart,
  BarChart,
]);

const loadingOptions = {
  text: '加载中，请稍候',
  textColor: '#000',
  maskColor: 'rgba(255, 255, 255, 0.3)',
  zlevel: 0,
  // fontSize: 12,
  showSpinner: true,
  spinnerRadius: 10,
}

const props = defineProps({
  option: Object,
})
// const option = {
//   ...common,
//   ...props.option,
// }
const option = computed(() => {
  console.log(' computed props.option ： ', props.option,   )// 
  return {
    ...common,
    ...props.option,
  } 
})
console.log(' option ： ', option,  )// 

const chartRef = ref(null)
onMounted(() => {
  // console.log(' onMounted resizeresize ： ', chartRef   )//
})

const resize = debounce(() => {
  console.log(' resizeresize ： ', chartRef.value   )// 
  chartRef.value?.resize()
}, 500);
// console.log(' onMounted2 resizeresize ： ', chartRef   )//
window.addEventListener('resize', resize);
</script>

<style >
.left, .right, .center {
  overflow: hidden;
}
</style>
