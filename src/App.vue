<template>
  <!-- <router-link to="/">home</router-link>
  <router-link to='/about'>about</router-link> -->
  <a-config-provider locale="zhCN">
    <router-view></router-view>
  </a-config-provider>
  <!-- <el-config-provider locale="zhCn">
    <el-pagination :total="100" />
    <router-view></router-view>
  </el-config-provider> -->
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
