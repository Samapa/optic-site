<template>
    <div>
      <menubar></menubar>
      <pageheader bannersrc="/optic-livesite/banners/champions.png" title="Champions" image="/optic-livesite/logos/cdl_og_chi_logo.svg"></pageheader>
      <players></players>
      <sponsors></sponsors>
      <shop></shop>
      <sitefooter></sitefooter>
    </div>
</template>

<script>
import menubar from '~/components/menu-bar.vue'
import sitefooter from '~/components/footer.vue'
import players from '~/components/players.vue'
import shop from '~/components/shop-tiles.vue'
import pageheader from '~/components/pageheader.vue'
import sponsors from '~/components/sponsors.vue'

export default {
     components: {
    menubar,
    players,
    shop,
    pageheader,
    sponsors,
    sitefooter
  }
}
</script>

<style scoped>

</style>