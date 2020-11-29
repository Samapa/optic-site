<template>
    <div>
      <menubar></menubar>
      <pageheader bannersrc="/optic-livesite/banners/tst.jpg" title="Team summertime" image="/optic-livesite/logos/tst.jpg"></pageheader>
      <socialblock namekey="tst"></socialblock>
      <tst></tst>
      <tstshop namekey="tst"></tstshop>

      <sitefooter></sitefooter>
    </div>
</template>

<script>
import menubar from '~/components/menu-bar.vue'
import sitefooter from '~/components/footer.vue'
import pageheader from '~/components/pageheader.vue'
import tst from '~/components/teamsummertime.vue'
import sponsors from '~/components/sponsors.vue'
import socialblock from '~/components/socialblock.vue'
import tstshop from '~/components/tstshop.vue'

export default {
     components: {
    menubar,
    pageheader,
    socialblock,
    tstshop,
    sponsors,
    tst,
    sitefooter
  }
}
</script>

<style scoped>

</style>