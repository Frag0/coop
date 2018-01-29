<template>
	<form @submit="seConnecter">
  <div>
    <input type="text" v-model="email" placeholder="Email">
  </div>

  <div>
    <input type="password" v-model="password" placeholder="Mot de passe">
  </div>

    <input type="submit" value="Se connecter">
  	<router-link to="/membre-creation">Créer un compte</router-link>
 </form>
</template>

<script>
export default {
  name: 'Connexion',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    seConnecter() {
      window.axios.post('members/signin', {
        email: this.email,
        password: this.password,
      }).then(response => {
      	this.$store.commit('setMember', response.data);
      	this.$store.commit('setToken', response.data.token);
      	window.axios.defaults.params.token = response.data.token;
        this.$router.push({path: '/conversations'});
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>