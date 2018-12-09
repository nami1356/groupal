<template>
  <div id="container">
    <Header id="header" />
    <router-view id="cont"></router-view>
    <Footer id="footer" />
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Top',
  data () {
    return {

    }
  },
  methods: {
    clickLogout: function () {
      this.$router.push('/logout')
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
#container {
    display: grid; /* グリッドレイアウト */
    grid-template-rows: 40px auto 30px;
    grid-template-columns: 1fr;
    height: 100vh;
    overflow: auto;
}
#header {
    grid-row: 1/2;
    grid-column:  1/2;
}
#cont{
    grid-row: 2/3;
    grid-column:  1/2;
    overflow: auto;
}

#footer{
    grid-row: 3/4;
    grid-column:  1/2;
}

</style>
