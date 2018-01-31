<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
</template>

	<div>
     	<button @click="logOut">Se déconnecter</button>
     	<router-link to="/conversations">Conversations</router-link>
    	<router-link to="/membres">Liste des membres</router-link>
    </div>
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

