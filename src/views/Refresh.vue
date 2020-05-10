<template>
  <div></div>
</template>

<script>
  export default {
    // https://segmentfault.com/q/1010000015276370/a-1020000015276972
    name: 'Refresh',
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$router.replace(from.path)
      })
    }
  }
</script>

<style scoped>

</style>