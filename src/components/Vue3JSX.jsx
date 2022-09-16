import { onMounted, ref, watch, computed, } from 'vue'
import SmartEcharts from '@/components/SmartEcharts'// 


export default function Counter() {
  const count = ref(0)
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
  
  // return () => <SmartEcharts></SmartEcharts>
  // return SmartEcharts
  return () => (
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
