<template>
 <form @submit="creerMembre" class="jumbotron">
  <div class="form-group">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">@</span>
      </div>
      <input type="text" class="form-control" placeholder="Nom" v-model="fullname">
    </div>
  </div>
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
  <div class="form-group">
     <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text glyphicon">&#xe240;</span>
      </div>
      <input type="password"  class="form-control" v-model="verif" placeholder="Vérifier mot de passe">
    </div>
  </div>

  <router-link to="/connexion" class="btn btn-dark">Se connecter</router-link>
  <input type="submit" class="btn btn-dark boutonvalidation" value="Créer un compte">
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
      verif:''
    }
  },
  methods: {
    creerMembre() {
      if (this.verif!==this.password) {
        alert('Les mots de passe ne correspondent pas')
      }
      else {
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
