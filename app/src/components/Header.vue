<template>
  <div class="header">
    <router-link to="/home"><img src="@/assets/house.png"></router-link>
    <router-link to="/search"><img src="@/assets/magnifying-glass.png"></router-link> |
    <router-link to="/signup">Signup</router-link> |
    <router-link to="/signin">Signin</router-link> |
    <router-link to="/">Top</router-link> |
    <router-link to="/chat"><img src="@/assets/envelope.png"></router-link> |
    <router-link to="/account"><img src="@/assets/avatar.png"></router-link> |
    <router-link to="/lifePoint"><img src="@/assets/chat.png"></router-link> |
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background-color: #66FFFF;
}
</style>
