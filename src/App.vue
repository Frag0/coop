<template>
  <div id="app">
    <navBar v-if="this.$store.state.member"></navBar>
    <router-view/>
    
  </div>
</template>

<script>

import MembreCreation from './components/MembreCreation.vue'
import Connexion from './components/Connexion.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    MembreCreation,
    Connexion,
    NavBar
  },
  mounted() {
    if(!this.$store.state.member ) {    
      this.$router.push({ path: '/connexion'});
    } else {
      window.axios.defaults.params.token = this.$store.state.token;
      this.$router.push({path: '/conversations'});
    }
    window.bus.$on('logout',() => {
    window.axios.delete('members/signout');
    this.$store.commit('setMember', false);
    this.$store.commit('setToken', false);
    this.$router.push({path: '/connexion'});

      })
  }
}
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
</style>
