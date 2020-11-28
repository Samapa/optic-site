<template>
    <div>
      <menubar></menubar>
      <titlebar></titlebar>
      <shop></shop>
      <players></players>
      <feature></feature>
      <tst></tst>
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
import tst from '../components/teamsummertime.vue'

export default {
     components: {
    menubar,
    shop,
    feature,
    players,
    sitefooter,
    tst,
    titlebar
  }
}
</script>

<style scoped>


</style>