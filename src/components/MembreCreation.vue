<template>
 <form @submit="creerMembre">
  <div>
    <input type="text" v-model="fullname" placeholder="Nom">
  </div>

  <div>
    <input type="text" v-model="email" placeholder="Mail">
  </div>

  <div>
    <input type="password" v-model="password" placeholder="Mot de passe">
  </div>

    <input type="submit" value="Créer un compte">
    <router-link to="/connexion">Se connecter</router-link>
  
 </form>
</template>

<script>
export default {
  name: 'MembreCreation',
  data () {
    return {
      fullname: '',
      email : '',
      password: '',
    }
  },
  methods: {
    creerMembre() {
      window.axios.post('members', {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
      }).then(response => {
        console.log('Le membre '+response.data.fullname+' a été créé')
        this.$router.push({path: '/connexion'})
      }).catch((error) => {
        alert(error.response.data.error.join("\n"))
      })
    }
  }
}
</script>

<style scoped>

</style>
