<template>
  <div class="portfolio">
    <Portfoliohero/>
    <Portfolio/>
    <Footer/>
  </div>
</template>

<script>
import Portfoliohero from '@/components/hero/Portfoliohero.vue'
import Portfolio from '@/components/portfolio/Portfolio.vue'
import Footer from '@/components/footer/footer.vue'

export default {
  name: 'Portfoliopage',
  components: {
    Portfoliohero,
    Portfolio,
    Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
