<template>
  <form @submit="creerConversation" class="jumbotron" >
  <div>
      <div class="form-group">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&#xe142;</span>
          </div>
          <input type="text"  class="form-control"  v-model="label" placeholder="Label">
        </div>
      </div>

      <div class="form-group">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&#x270f;</span>
          </div><input type="text"  class="form-control" v-model="topic" placeholder="Topic">
        </div>
      </div>
     <input class="btn btn-success" type="submit" value="Créer une conversation">


     <router-link to="/conversations">Retour</router-link>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ConversationCreation',
  data () {
    return {
      label: '',
      topic : '',
    }
  },
  methods: {
    creerConversation() {   
      window.axios.post('channels', {
        label: this.label,
        topic: this.topic,
      }).then(response => {
        console.log('La conversation '+response.data.label+' a été créée')
        this.$router.push({path: '/conversations'});  
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
  width: 85%;
}




</style>