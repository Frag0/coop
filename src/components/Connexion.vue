<template>
  <form @submit="seConnecter" class="jumbotron">
  <div class="form-group">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">&#x2709;</span>
      </div>
      <input type="text" class="form-control" v-model="email" placeholder="Mail">
    </div>
  </div>
  <div class="form-group">
     <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text glyphicon">&#xe240;</span>
      </div>
      <input type="password"  class="form-control" v-model="password" placeholder="Mot de passe">
    </div>
  </div>
    <input class="btn btn-dark" type="submit" value="Se connecter">
    <router-link to="/membre-creation" class="btn btn-dark">Créer un compte</router-link>
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
<style scoped>
form{
  text-align: center;
  position: absolute;
  top: 50%;
  left:50%;  
  transform: translate(-50%,-50%);
}
</style>