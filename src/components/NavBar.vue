<template>
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