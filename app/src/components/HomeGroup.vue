<template>
  <div class="homegroup">
    <div class="groupfeeds">
      <div class="group-content" style="font-size: 24px">
        <p>{{group[0].groupname}}</p>
        <br/>
        <p>{{groupfeeds[0].speaker}}</p>
        <div class="content">
          <img src="@/assets/avatar.png" alt="avator">
          <p>{{groupfeeds[0].content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeGroup",
  data () {
    return {
      group: [],
      groupfeeds: [],
      // groupname: group[0].groupname,
      // speaker: groupfeed[0].speaker
    }
  },
  created:function() {
    this.$firestore.collection('group').doc('codesmith').collection('feeds').get().then((
    querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.groupfeeds.push(doc.data())
    })
  }),
    this.$firestore.collection('group').get().then((
    querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.group.push(doc.data())
    })
    })
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
