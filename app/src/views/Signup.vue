<template>
  <div class="signup">
    <form class="card-panel" @submit.prevent="signup">
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
      </div>
      <p v-if="feedback" class="red-text">{{ feedback }}</p>
      <div class="field">
        <button class="btn">Signup</button>
      </div>
    </form>
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
      feedback: null,
    }
  },
  methods: {
    signup(){
      if(this.alias && this.email && this.password){
        this.feedback = null
        let ref = this.$firestore.collection('users').doc(this.alias)
        ref.get().then(doc => {
          if(doc.exists){
            this.feedback = 'This alias already exists'
          } else {
          // this alias does not yet exists in the db
            this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
              ref.set({
                alias: this.alias,
                user_id: user.uid
              })
            }).then(() => {
              this.$router.push({ name: 'Top' })
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
