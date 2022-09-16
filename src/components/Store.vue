<template>
  <div class="Store">
    <button @click='handleClick'>Store: {{ storeData }}</button>
    <button @click='handleClick3'>Store: {{ name }}</button>

    <button @click="changeHotNum">{{hotNum}}</button>
  </div>
</template>

<script>
import { useStore, } from 'vuex'// 
import { ref, } from 'vue'// 

export default {
  name: 'Store',
  computed: {
    storeData() {
      console.log(' storeData ： ', this.$store, )
      return this.$store.state.name 
    },
  },
  methods: {
    handleClick() {
      console.log(' handleClick ： ', this.$store, )
      this.$store.dispatch('changeStoreAction', {data: 'great'})
      this.$store.commit('changeStore', {data: 'great'})
    },
  },
  setup(props, ctx) {
    const store = useStore()
    console.log(' setup ： ', props, ctx, store, ); //
    const name = store.state.name
    const handleClick3 = () => {
      console.log(' handleClick3   ,   ： ',   )
      store.dispatch('changeStoreAction', {data: 'great'})
      store.commit('changeStore', {data: 'great'})
    }

    const hotNum = ref(6)
    const changeHotNum = () => {
      console.log(' changeHotNum   ,   ： ', hotNum.value,  )
      hotNum.value +=  1
    }
    return {
      name,
      handleClick3,
      hotNum,
      changeHotNum,
    }
  },
}
</script>

<style scoped>
</style>
