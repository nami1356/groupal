<template>
  <div class="conf">
    <router-link :to="{ name: 'Signup'}">
      <h1>Signup!!</h1>
      <p>{{alias}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return{
      alias: []
    }
  },
  created: function() {
    this.$firestore.collection('users').doc(this.$store.state.alias).get().then((querySnapshot) => {
      this.alias.push(querySnapshot.data().alias)
    })
  }
}
</script>

<style scoped>

</style>
