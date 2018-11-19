<template>
  <div class="account">
    <div class="global-area">
      <p>アカウント</p>
      <el-row :gutter="20">
        <el-col :span="8"><el-button type="primary" @click="changeConf()">&emsp;設定&emsp;</el-button></el-col>
        <el-col :span="8"><el-button type="primary" @click="changeTag()">タグ設定</el-button></el-col>
        <el-col :span="8"><el-button type="primary" @click="changeInfo()">お知らせ</el-button></el-col>
      </el-row>
    </div>
    <div class="content">
      <Conf v-show="confStatus"/>
      <Tag v-show="tagStatus"/>
      <Info v-show="infoStatus"/>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag'
import Info from '@/components/Info'
import Conf from '@/components/Conf'


export default {
  name: 'Account',
  data() {
    return {
      confStatus: true,
      tagStatus: false,
      infoStatus: false
    }
  },
  components: {
    Tag,
    Info,
    Conf
  },
  methods: {
    changeConf () {
      this.confStatus = true,
      this.tagStatus = false,
      this.infoStatus = false
    },
    changeInfo () {
      this.confStatus = false,
      this.tagStatus = false,
      this.infoStatus = true
    },
    changeTag () {
      this.confStatus = false,
      this.tagStatus = true,
      this.infoStatus = false
    }
  }
}
</script>

<style scoped>
.account {
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
