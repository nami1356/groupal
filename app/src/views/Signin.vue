<template>
  <div class="signin container">
    <form class="card-panel" @submit.prevent="signin">
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
        <button class="btn deep-purple">Signin</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from './firebase/index'
export default {
  name: 'Signin',
  data(){
    return{
      email: null,
      password: null,
      feedback: null
    }
  },
  methods: {
    signin(){
      if(this.email && this.password){
        this.feedback = null
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          //console.log(user)
          this.$router.push({ name: 'Top' })
        }).catch(err => {
          this.feedback = err.message
        })
      } else {
        this.feedback = 'Please fill in both fields'
      }
    }
  }
}
</script>

<style>
.signin{
  max-width: 400px;
  margin-top: 60px;
}
.login h2{
  font-size: 2.4em;
}
.login .field{
  margin-bottom: 16px;
}
</style>
