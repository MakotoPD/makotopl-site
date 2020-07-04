<template>
  <div class="contact">
    <ContactHero/>
    <Footer/>
  </div>
</template>

<script>
import ContactHero from '@/components/hero/Contacthero.vue'
import Footer from '@/components/footer/footer.vue'

export default {
  name: 'contactpage',
  components: {
    ContactHero,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.contact{
  width: 100vw;
  height: 100vh;
}
</style>