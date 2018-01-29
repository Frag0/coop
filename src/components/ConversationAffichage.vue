<template>
  <div>
     <h1>{{channel.label}}</h1>
     <h2>{{channel.topic}}</h2>
     <router-link to="/conversations">Retour à la liste des conversations</router-link>
     <ul>
       <li v-for="message of messages">
        <p>{{message.message}}</p>
        <button @click="deletePost(message._id)">Supprimer</button>
       </li>
     </ul>
     <form @submit="creerMessage">
     <div>
      <input type="text" v-model="message">
      <input type="submit" value="Envoyer">
     </div>
   </form>
  </div>
</template>

<script>
export default {
  name: 'ConversationAffichage',
  data () {
    return {
      channel : [],
      messages : []
    }
  },
  mounted() {
    window.axios.get('channels/'+this.$route.params.id)
    .then(response => {
      this.channel = response.data
    })
    .catch(e => {
      this.errors.push(e)
    }),
    window.axios.get('channels/'+this.$route.params.id+'/posts')
    .then(response => {
      this.messages = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  updated() {
    window.axios.get('channels/'+this.$route.params.id+'/posts')
    .then(response => {
      this.messages = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
      creerMessage() {   
      window.axios.post('channels/'+this.$route.params.id+'/posts', {
        message: this.message,
      }).then(response => {
        this.message = ''
      })
    },
    deletePost(id) {
      window.axios.delete('channels/'+this.$route.params.id+'/posts/'+id);
    }
  }
}
</script>