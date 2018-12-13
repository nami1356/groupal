<template>
  <div class="creategroup">
    <div class="groupname">
      <el-input type="text" v-model="groupName"/>
      <p>{{groupName}}</p>
    </div>
    <div class="tag">
      <p>creategroup</p>
      <p>参加に必要なタグを設定します</p>
      <el-input type="text" placefolder="search"/>
      <el-button type="primary" @click="addTag()" v-model="tag">
        テストタグ
      </el-button>
    </div>
    <div class="needtag">
      <p v-for="(v , i) in tags" :key="i">
        {{v}}
      </p>
    </div>
    <div class="member">
      <p>メンバーを追加します</p>
      <el-input type="text" placefolder="search"/>
      <el-button type="primary" @click="addMember()" v-model="member">
        テストメンバー
      </el-button>
    </div>
    <div class="create">
      <el-button type="primary" @click="createGroup()">作成！</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateGroup",
  data() {
    return {
      groupName: '',
      tag: '',
      member: '',
      tags:[],
      members: []
    }
  },
  // 自分が設定したタグを持っているかの判定が必要
  methods: {
    addTag() {
      this.tags.push(this.tag)
    },
    addMember() {
      this.members.push(this.member)
    },
    createGroup() {
      this.$firestore.collection('group').set({
        groupname: this.groupName,
        member: this.members,
        tags: this.tags
      }).then(() => {
      this.$firestore.collection('users').doc(this.$state.store.email).add({
        group: this.groupname
      })
      })
    }
  }
}
</script>

<style lang="css">
</style>
