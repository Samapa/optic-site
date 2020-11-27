<template>
    <div>
      <menubar></menubar>
      <titlebar></titlebar>
      <shop></shop>
      <feature></feature>
      <sitefooter></sitefooter>
      
    </div>
</template>

<script>
import menubar from '~/components/menu-bar.vue'
import titlebar from '~/components/title-bar.vue'
import shop from '~/components/shop-tiles.vue'
import feature from '~/components/feature-video.vue'
import sitefooter from '~/components/footer.vue'

export default {
     components: {
    menubar,
    shop,
    feature,
    sitefooter,
    titlebar
  }
}
</script>

<style scoped>

</style>