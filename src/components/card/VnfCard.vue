<template>
    <div>
        <CardBase :icon="icon" :title="title" :icon_background="icon_background" :total_num="total_num">
            <div slot="card_main">
                <div id="pieReport" style="width: 100%;height: 300px;"></div>
            </div>
        </CardBase>
    </div>
</template>

<script>
  import CardBase from "./CardBase";

  export default {
    components: {
      CardBase
    },
    name: 'VnfCard',
    props: {
      icon_background: {
        default: "#409EFF"
      },
      title: {
        default: '租户'
      },
      icon: {
        default: 'el-icon-office-building'
      },
      total_num: {
        default: 0
      }
    },
  }
</script>

<style scoped>

</style>
