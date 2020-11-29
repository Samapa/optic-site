<template>
    <div>
      <menubar></menubar>
      <pageheader bannersrc="/optic-livesite/banners/togetherwestand.jpeg" title="Together we stand. #Greenwall" image=""></pageheader>
      <greenwall></greenwall>
      <sitefooter></sitefooter>
    </div>
</template>

<script>
import menubar from '~/components/menu-bar.vue'
import sitefooter from '~/components/footer.vue'
import pageheader from '~/components/pageheader.vue'
import greenwall from '~/components/greenwall.vue'

export default {
     components: {
    menubar,
    pageheader,
    greenwall,
    sitefooter
  }
}
</script>

<style scoped>

</style>