<template>
    <div>
      <menubar></menubar>
      <pageheader bannersrc="/banners/tst.jpg" title="Team summertime" image="/logos/tst.jpg"></pageheader>
      <tst></tst>

      <sitefooter></sitefooter>
    </div>
</template>

<script>
import menubar from '~/components/menu-bar.vue'
import sitefooter from '~/components/footer.vue'
import pageheader from '~/components/pageheader.vue'
import tst from '~/components/teamsummertime.vue'
import sponsors from '~/components/sponsors.vue'

export default {
     components: {
    menubar,
    pageheader,
    sponsors,
    tst,
    sitefooter
  }
}
</script>

<style scoped>

</style>