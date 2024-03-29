<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'
import GamePage from './components/GamePage.vue'
import UserProfile from './components/UserProfile.vue'
import LoginPage from './components/LoginPage.vue'
import CartVidget from './components/CartVidget.vue'

export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    GamePage,
    UserProfile,
    LoginPage,
    CartVidget,
  },
}
</script>

<template>
  <router-view></router-view>
</template>

<style></style>
