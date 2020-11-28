<template>
    <div>
      <menubar></menubar>
      <pageheader bannersrc="/banners/winning.jpg" title="Partners" image=""></pageheader>
      <sponsors></sponsors>
      <sitefooter></sitefooter>
    </div>
</template>

<script>
import menubar from '~/components/menu-bar.vue'
import sitefooter from '~/components/footer.vue'
import sponsors from '~/components/sponsors.vue'
import pageheader from '~/components/pageheader.vue'

export default {
     components: {
    menubar,
    pageheader,
    sponsors,
    sitefooter
  }
}
</script>

<style scoped>

</style>