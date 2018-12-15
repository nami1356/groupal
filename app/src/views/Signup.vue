<template>
  <div class="signup">
    <h2 class="center">Signup</h2>
    <div class="field">
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email">
    </div>
    <div class="field">
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password">
    </div>
    <div class="field">
      <label for="name">Alias</label>
      <input id="name" type="text" v-model="alias">
      <p>{{this.alias}}</p>
    </div>
    <p v-if="feedback" class="red-text">{{ feedback }}</p>
    <div class="field">
      <el-button class="btn" @click='signup'>Signup</el-button>
    </div>
    <router-link :to="{ name: 'Signin'}">サインインへ</router-link>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data(){
    return{
      email: null,
      password: null,
      alias: null,
      feedback: null
    }
  },
  methods: {
    signup(){
      if(this.alias && this.email && this.password){
        this.feedback = null
        let ref = this.$firestore.collection('users').doc(this.email)
        ref.get().then(doc => {
          if(doc.exists){
            this.feedback = 'This alias already exists'
          } else {
          // this alias does not yet exists in the db
            this.$auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
              ref.set({
                alias: this.alias,
                email: this.email,
                group: [this.alias]
              })
            }).then(() => {
              ref.collection('tags').add({
                tag: this.alias
              })
            }).then(() => {
              this.$firestore.collection('group').doc(this.alias).set({
                groupname: this.alias,
                member: [this.alias],
                tags: [this.alias]
              })
            }).then(() => {
              this.$firestore.collection('group').doc(this.alias).collection('feeds').add({
                content: "これは自分用メモです",
                date: "投稿日時を入れたい",
                speaker: this.alias
              })
            }).then(() => {
              this.$firestore.collection('tags').doc(this.alias).set({
                created: this.alias,
                member: [this.alias],
                tag: this.alias
              })
            }).then(() => {
              this.$store.commit('setEmail',{email : this.email})
              this.$store.commit('setAlias',{alias : this.alias})
              this.$store.commit('setFirstTag',{myFirstTag : this.alias})
            }).then(() => {
              this.$router.push({ name: 'Top'})
            })
            .catch(err => {
              this.feedback = err.message
            })
          }
        })
      } else {
        this.feedback = 'Please fill in all fields'
      }
    }
  }
}
</script>

<style>
.signup{
  max-width: 400px;
  margin-top: 60px;
}
.signup h2{
  font-size: 2.4em;
}
.signup .field{
  margin-bottom: 16px;
}
</style>
