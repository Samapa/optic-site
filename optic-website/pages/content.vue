<template>
    <div>
      <menubar></menubar>
      <sitefooter></sitefooter>
    </div>
</template>

<script>
import menubar from '~/components/menu-bar.vue'
import sitefooter from '~/components/footer.vue'

export default {
     components: {
    menubar,
    sitefooter
  }
}
</script>

<style scoped>

</style>