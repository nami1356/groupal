<template>
  <div class="tag">
    <div class="addtagholder">
      <p>20タグ設定できます</p>
      <el-button size="mini" type="info"
      @click="addTagHolder()">拡張</el-button>
      <!-- ランダムに有限のタグを表示 -->
    </div>
    <div v-for="(v, i) in 5" :key="i" class="tagcontent">
      <el-button type="primary" size="small" @click="addTag()">
        {{showTags[v]}}
      </el-button>
    </div>
    <div class="searchtag">
      <el-input type="text" placeholder="タグを検索する" v-model="searchTag"/>
    </div>
    <!-- 検索→tagsに入れる -->
    <div class="createtag">
      <el-input type="text" placeholder="タグを作成する" v-model="newTag"/>
      <el-button type="info" @click="createTag">タグ作成</el-button>
    </div>
    <el-collapse accordion>
      <el-collapse-item title="オススメのタグ">
        <div v-for="(v, i) in showTags" :key="i" class="reccomendtag">
          <el-button type="primary" size="small" @click="addTag()">
            {{v}}
          </el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
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
      this.$firestore.collection('users').doc('tags').add({
        tags:this.tags.push('addtest')
      })
      // 自身にタグを設定する

    // },
    // addTagHolder() {
    //   let tagholder= this.$firestore.collection(users).doc(tagholder).get({
    //     this.tagholder= tagholder
    //   }),
    //   this.$firestore.collection(users).doc(tagholder).update({
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
  padding: 3% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}
.tagcontent {
  padding: 3% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.searchtag {
  margin-bottom: 10px;

}
.createtag {

}
.reccomendtag {
  padding: 3% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

</style>

<!-- ボタンをel-tagに変更 -->
