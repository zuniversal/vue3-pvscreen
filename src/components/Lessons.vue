<template>
  <div>
    Lessons
    <button @click="toggleIsHoc">toggleIsHoc</button>
    <HocComSon :isTrue='isHoc'></HocComSon>  
    <StoreCom name='zyb' class="zyb"></StoreCom>  
    <Store></Store>  
    <button @click="toggleDynamic">toggleDynamic</button>
    <!-- <DefineComponent name='好的'>
      <div>插槽内容1</div>  
      <div>插槽内容2</div>  
      <div>{zyb: () => <div>插槽内容3</div>}</div>  
    </DefineComponent>  
    <hr/> -->
    <DefineComponent name='好的'>
      <!-- <template v-slot:header>
        <div>具名插槽 header {{header}}</div>
      </template> -->
      <!-- <template #footer>
        <div>具名插槽 footer</div>
      </template> -->
      <!-- <template #[dynamic]>
        <div>动态具名插槽 dynamic</div>
      </template> -->
      <template v-slot:header='headerData' >
        <div>具名插槽 header {{headerData}}</div>
      </template>
      <template #footer='slotProps'>
        <div>
          具名插槽 footerData
          <div v-for="(item, i) in slotProps.footerData" :key="i"	>{{item}}</div>
        </div>
      </template>
      <template #main='mainData' >
        <div>具名插槽 mainData {{mainData}}</div>
      </template>
      <!-- <template #main='{mainData, extra}'>
        <div>
          具名插槽 mainData
          <div v-for="(item, i) in slotProps.mainData" :key="i"	>{{mainData}} - {{extra}}</div>
        </div>
      </template> -->
      <template #[dynamic]='slotProps'>
        <div>
          动态具名插槽 dynamic
          <div v-for="(item, i) in slotProps.data" :key="i"	>{{item}}</div>
        </div>
      </template>
      
      <template v-slot='slotProps'>
        <div>无名插槽 {{slotProps}}</div>
      </template>
    </DefineComponent>  
    <!-- <HocCom></HocCom>   -->
  </div>
</template>

<script setup>
import { ref,  } from 'vue'// 

import HocCom from '@/components/HocCom'// 
import Store from '@/components/Store'// 
import StoreCom from '@/components/StoreCom'//
// import DefineComponent from '@/components/DefineComponent'// 
import DefineComponent from '@/components/DefineComponent.jsx'// 
// import DefineComponent from '@/components/DefineComponent.vue'// 

const dynamic = ref('d1')
const toggleDynamic = () => {
  console.log(' toggleDynamic   ,   ： ', dynamic.value,  )
  dynamic.value = dynamic.value === 'd1' ? 'd2' : 'd1'
}

const isHoc = ref(false)
const toggleIsHoc = () => {
  console.log(' toggleIsHoc   ,   ： ', isHoc.value,  )
  isHoc.value = !isHoc.value
}

const HocComSon = HocCom({
  isHoc: isHoc.value,  
})

</script>

<style>
</style>