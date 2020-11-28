<template>
    <div>
      <menubar></menubar>
      <titlebar></titlebar>
      <shop></shop>
      <feature></feature>
      <players></players>
      <sitefooter></sitefooter>
      
    </div>
</template>

<script>
import menubar from '~/components/menu-bar.vue'
import titlebar from '~/components/title-bar.vue'
import shop from '~/components/shop-tiles.vue'
import feature from '~/components/feature-video.vue'
import sitefooter from '~/components/footer.vue'
import players from '~/components/players.vue'

export default {
     components: {
    menubar,
    shop,
    feature,
    players,
    sitefooter,
    titlebar
  }
}
</script>

<style scoped>

</style>