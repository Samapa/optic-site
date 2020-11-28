<template>
    <div>
      <menubar></menubar>
      <pageheader bannersrc="/banners/champions.png" title="Champions" image="/logos/cdl_og_chi_logo.svg"></pageheader>
      <players></players>
      <sponsors></sponsors>
      <sitefooter></sitefooter>
    </div>
</template>

<script>
import menubar from '~/components/menu-bar.vue'
import sitefooter from '~/components/footer.vue'
import players from '~/components/players.vue'
import pageheader from '~/components/pageheader.vue'
import sponsors from '~/components/sponsors.vue'

export default {
     components: {
    menubar,
    players,
    pageheader,
    sponsors,
    sitefooter
  }
}
</script>

<style scoped>

</style>