<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'
import GamePage from './components/GamePage.vue'
import UserProfile from './components/UserProfile.vue'

export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    GamePage,
    UserProfile,
  },
}
</script>

<template>
  <vue-router></vue-router>
  <!-- <user-profile></user-profile> -->
</template>

<style></style>
