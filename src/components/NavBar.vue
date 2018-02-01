<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Co'op</a>
      </div>
      <ul class="nav navbar-nav">
        <router-link to="/conversations" class="black">Conversations</router-link> 
      </ul>
      <ul class="nav navbar-nav">
       <router-link to="/membres" class="black espace">Liste des membres</router-link>
     </ul>
     <ul class="nav navbar-nav">
      <router-link to="/conversation-creation" class="black">Créer une conversation</router-link>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <button @click="logOut" class="btn btn-outline-danger deconnexion ">Se déconnecter</button>
    </ul>
  </div>
</nav> 
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return {}
  },
  methods: {
    logOut() {
      window.bus.$emit('logout');
    }
  }
}
</script>

<style scoped>

.black{

  color : black;


}


</style>