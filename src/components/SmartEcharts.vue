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
import { ref, defineComponent, onMounted, defineProps } from 'vue';
import 'echarts-liquidfill'
import common from '@/common/SmartEchart/common';

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
const option = {
  ...common,
  ...props.option,
}

const chartRef = ref(null)
onMounted(() => {
  console.log(' onMounted resizeresize ： ', chartRef   )//
})
const resize = () => {
  console.log(' resizeresize ： ', chartRef.value   )// 
  chartRef.value?.resize()
}
console.log(' onMounted2 resizeresize ： ', chartRef   )//
window.addEventListener('resize', resize);
</script>

<style scoped>

</style>
