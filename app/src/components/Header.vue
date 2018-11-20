<template>
  <div class="header">
    <router-link to="/home"><img src="@/assets/house.png"></router-link>
    <img src="@/assets/magnifying-glass.png" @click="showSearch">
    <el-badge :value="12" class="chat">
      <router-link to="/chat"><img src="@/assets/envelope.png"></router-link>
  </el-badge>
    <router-link to="/account"><img src="@/assets/avatar.png"></router-link>
    <el-badge :value="12" class="item">
      <img src="@/assets/chat.png" @click="centerDialogVisible = true">
    </el-badge>
    <el-dialog
    title="課金しますか？"
    :visible.sync="centerDialogVisible"
    width="100%"
    center>
      <span>LifePoint回復！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">やめとく</el-button>
        <el-button type="primary" @click="recoverLife">１００円</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      centerDialogVisible: false
    }
  },
  methods: {
    showSearch() {
      this.search = !this.search
    },
    recoverLife() {
      this.centerDialogVisible = false
      alert('回復！')
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
