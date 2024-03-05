<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'
import GamePage from './components/GamePage.vue'

export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    GamePage,
  },
}
</script>

<template>
  <site-header></site-header>
  <router-view></router-view>
  <site-footer></site-footer>
</template>

<style></style>
