<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>
    <p>You don't have an account?
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Signin',
  data ()  {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      // loginし、companyIDが存在するかどうかcustum claimsを確認。
      // 格納されていない場合、signoutしてloginへ
      this.$auth.signInWithEmailAndPassword(this.username, this.password).then(
        result => {
          alert('success')
          return result.user.getIdTokenResult()
        },
        err => {
          alert(err.message)
        }
      ).then((result) => {
        // user情報関連をstateに保管
        if (result) {
          this.$router.push('/')
        } else {
          this.$auth.signOut().then(() => {
            this.$router.push('/signIn')
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
