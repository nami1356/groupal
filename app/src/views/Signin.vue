<template>
  <div class="signin container">
    <h2 class="center deep-purple-text">Signin</h2>
    <div class="field">
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email">
    </div>
    <div class="field">
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password">
    </div>
    <p v-if="feedback" class="red-text center">{{ feedback }}</p>
    <div class="field center">
      <el-button class="btn deep-purple" @click="signin">Signin</el-button>
    </div>
    <router-link :to="{ name: 'Signup'}">登録へ</router-link>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data(){
    return{
      email: null,
      password: null,
      feedback: null,
      alias: '',
      myTag: []
    }
  },
  methods: {
    signin(){
      if(this.email && this.password){
        this.feedback = null
        this.$auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('success!')
          this.$router.push({ name: 'Home' })
        }).catch(err => {
          alert('error!')
          this.feedback = err.message
        })
      } else {
        this.feedback = 'Please fill in both fields'
      }
    }
  },
  created:function() {
    this.$firestore.collection('users').doc(this.email).get().then((querySnapshot) => {
      this.alias = querySnapshot.data().alias
      this.$store.commit('setEmail',{email : this.email})
      this.$store.commit('setAlias',{alias : this.alias})
      }).then(() => {
      this.$firestore.colledtion('users').doc(this.email).collection('tags').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.myTag.push(doc.data().tag)
        })
      })
    }).then(() => {
      this.$store.commit('setFirstTag',{myFirstTag : this.myTag})
    })
  }
}
</script>

<style>
.signin{
  max-width: 400px;
  margin-top: 60px;
}

.field label{
  text-decoration-color: purple;
}
.login h2{
  font-size: 2.4em;
}
.login .field{
  margin-bottom: 16px;
}
</style>
