<template>
    <div>
      <menubar></menubar>
      <pageheader bannersrc="/banners/contact.jpg" title="Get in touch" image=""></pageheader>
      <contactform></contactform>
      <sitefooter></sitefooter>
    </div>
</template>

<script>
import menubar from '~/components/menu-bar.vue'
import sitefooter from '~/components/footer.vue'
import pageheader from '~/components/pageheader.vue'
import contactform from '~/components/contactform.vue'

export default {
     components: {
    menubar,
    pageheader,
    contactform,
    sitefooter
  }
}
</script>

<style scoped>

</style>