<template>
  <div class="childSlot">
  <MBase/>
  </div>
</template>

<script>
  import MBase from "./MBase";

  export default {
    name: "MResource",
    components: {MBase},
    extends: MBase,
    data() {
      return {
        classObject: {
          "el-icon-office-building": true,
        },
        title: '资源',
        description: '资源总数',
        desc_num: 0,
        normal_num: 1,
        abnormal_num: 1,
        icon_background: {background: "rgb(22, 114, 221)"},
        normal_percent: 50,
        colors: '#227700'
      }
    },
    mounted () {
      this.$parent.title = '资源'
    }
  }
</script>

<style scoped>

</style>