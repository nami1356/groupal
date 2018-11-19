<template>
  <div class="home">
    <div class="global-area">
      <p v-show="!search">ホーム</p>
      <el-input type="text" placeholder="検索" v-show="search" v-model="searchContent"/>
      <el-row :gutter="20">
        <el-col :span="12"><el-button type="primary" @click="changeFeed()">フィード</el-button></el-col>
        <el-col :span="12"><el-button type="primary" @click="changeGroup()">グループ</el-button></el-col>
      </el-row>
    </div>
    <div class="content">
      <Feed v-show="feedStatus"/>
      <Group v-show="groupStatus"/>
    </div>
  </div>
</template>

<script>
import Feed from '@/components/HomeFeed'
import Group from '@/components/HomeGroup'

export default {
  name: 'Home',
  data() {
    return {
      feedStatus: true,
      groupStatus: false,
      search: false,
      searchContent: ''
    }
  },
  components: {
    Feed,
    Group
  },
  methods: {
    changeFeed() {
      this.feedStatus = true,
      this.groupStatus = false
    },
    changeGroup() {
      this.feedStatus = false,
      this.groupStatus = true
    }
  }
}
</script>

<style scoped>
.home {
  display: grid;
  grid-template-rows: 100px 1fr;
}
.global-area {
  background-color: #E4E7ED;
  grid-row: 1/2;
}
.content {
  grid-row: 2/3;
}
</style>
