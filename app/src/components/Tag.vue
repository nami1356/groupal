<template>
  <div class="tag">
    <div class="addtagholder">
      <p>20タグ設定できます</p>
      <el-button size="mini" type="info"
      @click="addTagHolder()">拡張</el-button>
      <!-- ランダムに有限のタグを表示 -->
    </div>
    <div v-for="(v, i) in myTag" :key="i" class="tagcontent">
      <el-button type="primary" size="small">
        {{v}}
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
      newTag: '',
      myNewTag: '',
      myTag: ''
    }
  },
  methods: {
    createTag() {
      this.$firestore.collection('tags').doc(this.newTag).set({
        tags: this.newTag
      })
    },
    addTag() {
      this.$firestore.collection('users').doc(this.$store.state.email).collection('tags').doc(this.myNewTag).set({
        tag:this.myNewTag
      })
    }
  },
  created:function() {
    this.$firestore.collection('tags').get().then((
    querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.showTags.push(doc.data().tags)
    })
  }),
    this.$firestore.collection('users').doc(this.$store.state.email).collection('tags').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.myTag.push(doc.data().tag)
      })
    })
  }
}
</script>
<style scoped>

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

.reccomendtag {
  padding: 3% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

</style>

<!-- ボタンをel-tagに変更 -->
