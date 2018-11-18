<template>
  <div class="tag">
    <div class="addtagholder">
      <h1>20タグ設定できます</h1>
      <button type="button" name="button" @click="addTagHolder()">拡張</button>
      <!-- ランダムに有限のタグを表示 -->
    </div>
    <div v-for="(v, i) in showTags" :key="i" class="tagcontent">
      <button type="button" name="button" @click="addTag()">{{v}}</button>
    </div>
    <div class="searchtag">
      <input type="text" placeholder="タグを追加する" v-model="searchTag"/>
    </div>
    <!-- 検索→tagsに入れる -->
    <div class="createtag">
      <input type="text" placeholder="タグを作成する" v-model="newTag">
      <button type="button" @click="createTag">タグ作成</button>
    </div>

  </div>
</template>
<script>
export default {
  name: "Tag",
  data() {
    return {
      leftTag: 0,
      searchTag: '',
      showTags: [],
      newTag: ''
    }
  },
  methods: {
    createTag() {
      this.$firestore.collection('tags').add({
        tags: this.newTag
      })
    },
    addTag() {
      // 自身にタグを設定する
    // },
    // addTagHolder() {
    //   let tagholder= this.$firestore.collection(users).doc(tagholder).get({
    //     this.tagholder= tagholder
    //   }),
    //   this.$firestore.collection(users).doc(tagholder).add({
    //     tagholder: this.tagholder++
    //   })
    //   // 自身のタグ追加可能数を増やす
    }
  },
  created:function() {
    this.$firestore.collection('tags').get().then((
    querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.showTags.push(doc.data().tags)
    })
    })
  }
}
</script>
<style scoped>
.tag {

}
.addtagholder {

}
.tagcontent {

}
.searchtag {

}
.createtag {

}

</style>
