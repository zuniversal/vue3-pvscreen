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
import { ref, defineComponent } from 'vue';
import 'echarts-liquidfill'

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

import common from './common';


const loadingOptions = {
  text: '加载中，请稍候',
  textColor: '#000',
  maskColor: 'rgba(255, 255, 255, 0.3)',
  zlevel: 0,
  // fontSize: 12,
  showSpinner: true,
  spinnerRadius: 10,
}
// export default defineComponent({
//   setup(props, ctx) {
export default (props, ctx) => {
  const option2 = ref({
    title: {
      text: 'Traffic Sources',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
    },
    series: [
      {
        name: 'Traffic Sources',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 234, name: 'Ad Networks' },
          { value: 135, name: 'Video Ads' },
          { value: 1548, name: 'Search Engines' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  });

  const option = {
    ...common,
    ...props.option,
  }
  // return { option };
  return <VChart class="chart" {...props} option={option} autoresize loading-options={loadingOptions} />
  return <VChart class="chart" option={props.option} />
  // return <VChart class="chart" option={option.value} />
}
// });