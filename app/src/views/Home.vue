<template>
  <div class="home">
    <div class="global-area">
      <p>ホーム</p>
      <button @click="changeFeed()">
        フィード
      </button>
      <button @click="changeGroup()">
        グループ
      </button>
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
      groupStatus: false
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
  grid-row: 1/2;
}
.content {
  grid-row: 2/3;
}
</style>
