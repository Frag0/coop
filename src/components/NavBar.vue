<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Co'op</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/conversations" class="black">Conversations</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/membres" class="black">Liste des membres</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/conversation-creation" class="black">Créer une conversation</router-link>
        </li>
        <li class="nav-item">
          <button @click="logOut" class="btn btn-outline-danger deconnexion">Se déconnecter</button>
        </li>
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

  .deconnexion{
    
   

  }

</style>