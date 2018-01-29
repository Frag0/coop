<template>
  <form @submit="creerConversation">
   <div>
     <input type="text" v-model="label" placeholder="Label">
     <input type="text" v-model="topic" placeholder="Topic">
     <input type="submit" value="Créer une conversation">
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