<template>
  <div class="header">
    <router-link to="/home"><img src="@/assets/house.png"></router-link>
    <img src="@/assets/magnifying-glass.png" @click="showSearch">
    <el-badge :value="12" class="chat">
      <router-link to="/chat"><img src="@/assets/envelope.png"></router-link>
  </el-badge>
    <router-link to="/account"><img src="@/assets/avatar.png"></router-link>
    <el-badge :value="12" class="item">
      <router-link to="/lifePoint"><img src="@/assets/chat.png"></router-link>
    </el-badge>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  },
  methods: {
    showSearch() {
      this.search = this.search
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #E4E7ED;
  padding: 3% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
