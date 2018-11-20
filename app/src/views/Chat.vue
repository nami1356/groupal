<template>
  <div class="chat">
    <div class="global-area">
      <p>トーク</p>
      <el-row :gutter="20">
        <el-col :span="8"><el-button type="primary" @click="changeFeed()">&emsp;フィード&emsp;</el-button></el-col>
        <el-col :span="8"><el-button type="primary" @click="changeMail()">メール</el-button></el-col>
        <el-col :span="8"><el-button type="primary" @click="changeGroup()">グループ</el-button></el-col>
      </el-row>
    </div>
    <div class="content">
      <Feed v-show="feedStatus"/>
      <Mail v-show="mailStatus"/>
      <Group v-show="groupStatus"/>
    </div>
  </div>
</template>

<script>
import Feed from '@/components/TalkFeed'
import Mail from '@/components/TalkMail'
import Group from '@/components/TalkGroup'

export default {
  name: 'Chat',
  data() {
    return {
      feedStatus: true,
      mailStatus: false,
      groupStatus: false
    }
  },
  components: {
    Feed,
    Mail,
    Group
  },
  methods: {
    changeFeed () {
      this.feedStatus = true,
      this.mailStatus = false,
      this.groupStatus = false
    },
    changeMail () {
      this.feedStatus = false,
      this.mailStatus = true,
      this.groupStatus = false
    },
    changeGroup () {
      this.feedStatus = false,
      this.mailStatus = false,
      this.groupStatus = true
    }
  }
}
</script>

<style scoped>
.chat {
  display: grid;
  grid-template-rows: 120px 1fr;
}
.global-area el-col {
  width: 100px;
}
.global-area {
  background-color: #E4E7ED;
  grid-row: 1/2;
}
.content {
  grid-row: 2/3;
}
</style>
