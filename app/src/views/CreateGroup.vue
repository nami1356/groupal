<template>
  <div class="creategroup">
    <div class="tag">
      <p>creategroup</p>
      <p>参加に必要なタグを設定します</p>
      <el-input type="text" placefolder="search"/>
      <el-button type="primary" @click="addTag()" v-model="tag">
        テストタグ
      </el-button>
      <p>{{tag}}</p>
    </div>
    <div class="member">
      <p>メンバーを追加します</p>
      <el-input type="text" placefolder="search"/>
      <el-button type="primary" @click="addTag()" v-model="tag">
        テストメンバー
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateGroup",
  data() {
    return {
      tag: '',
      tags:[]
    }
  },
  methods: {
    addTag() {
      this.tags.push(this.tag)
    }
  }
}
</script>

<style lang="css">
</style>
