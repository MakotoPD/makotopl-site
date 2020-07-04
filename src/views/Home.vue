<template>
  <div class="home">
    <Homehero/>
    <ThreeInfo/>
    <Dlaczego/>
    <Zalety/>
    <End/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Homehero from '@/components/hero/Homehero.vue'
import ThreeInfo from '@/components/content/three_info.vue'
import Dlaczego from '@/components/content/dlaczego.vue'
import Zalety from '@/components/content/zalety.vue'
import End from '@/components/content/end.vue'
import Footer from '@/components/footer/footer.vue'

export default {
  name: 'Homepage',
  components: {
    Homehero,
    ThreeInfo,
    Dlaczego,
    Zalety,
    End,
    Footer
  }
}
</script>

<style lang="scss">
  h1, h2, h3, h4, h5, h6, p {
    cursor: default;
  }
</style>