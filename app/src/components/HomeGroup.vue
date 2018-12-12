<template>
  <div class="group">
    <div class="creategroup">
      <router-link :to="{ name: 'CreateGroup'}">
        <el-button type="info">グループ作成</el-button>
      </router-link>
    </div>
    <div class="mygroup" v-for="(g,index) in groups" :key="index">
      <div v-for="(group,index) in g" :key="index">
        <el-button type="info" @click="groupInfo" v-model="grouptag">{{group}}</el-button>
        <p>{{grouptag}}test!</p>
      </div>
    </div>
    <h1>{{email}}</h1>
  </div>
</template>
<script>
export default {
  name: "HomeGroup",
  data () {
    return {
      groups: [],
      grouptag: '',
      email: ''   //test
    }
  },
  methods: {
    groupInfo() {
      this.$router.push({ name: 'GroupInfo', params: {group:this.grouptag} })
    }
  },
  created:function() {
    // 自分の所属グループを取得 .where("myid","==",true)?
    this.$firestore.collection('users').doc(this.$state.store.email).get().then((
      querySnapshot) => {
        this.groups.push(querySnapshot.data().group)
      })
      this.email = this.$store.state.email
  }
}
</script>
<style  scoped>
.group-content {
  text-align: left;
  background-color: YELLOW;
  margin-top: 10px;
}
.content img {
  display:inline-block;
  vertical-align: middle;
}
.content p {
  display: inline;
  vertical-align: middle;
}
</style>
