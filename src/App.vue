<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {

  name: 'app',
  components: {
    
  },
  created () {
    this.$store.dispatch('initStore');
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
