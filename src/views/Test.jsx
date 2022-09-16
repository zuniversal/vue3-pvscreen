import { onMounted, ref, watch, computed, } from 'vue'
import SmartEcharts from '@/components/SmartEcharts'// 
import SmartEchartsJSX from '@/components/SmartEchartsJSX'// 

const count = ref(0)

const option = ref({
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
export default function Counter() {
  console.log(' count.value ： ', count.value,  )// 
  onMounted(() => {
    console.log(' onMounted ： ',    )// 
  })
  watch(count, val => {
    console.log('  watch  val ', val,    )
  }, {
    immediate: true,
  })
  const computedVal = computed(() => {
    console.log(' computedVal ： ',    )// 
    return count.value * 2 
  })
  
  const com = <div>count: {count.value}</div>// 无响应式变化
  const com2 = () => <div>count: {count.value}</div>
  const Com3 = () => <div>count: {count.value}</div>
  
  return <SmartEchartsJSX></SmartEchartsJSX>
  return <SmartEcharts option={option}></SmartEcharts>
  // return () => <SmartEcharts></SmartEcharts>
  // return SmartEcharts
  // return () => (
  return (
    <>
      {com}
      {com2()}
      <Com3></Com3>
      <div>count: {count.value} - {computedVal.value}</div>
      <button
        onClick={() => {
          console.log(' count.value ： ', count.value,  )// 
          count.value++
        }}
      >
        add
      </button>
    </>
  )
}
