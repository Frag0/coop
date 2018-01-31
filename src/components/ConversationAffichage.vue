<template>
  <div>
     <h1>{{channel.label}}</h1>
     <h2>{{channel.topic}}</h2>
     <ul>
        <conversationMessage v-for="message of messages" :message="message"></conversationMessage>
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

import ConversationMessage from './ConversationMessage.vue'

export default {
  name: 'ConversationAffichage',
  components: {ConversationMessage},
  data () {
    return {
      channel : [],
      messages : [],
      message : ''
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
    this.rafraichirMessages()
    window.bus.$on('rechargerMessage', function(id){
      messages.splice(id)
    })
  },
  methods: {
      creerMessage() {   
      window.axios.post('channels/'+this.$route.params.id+'/posts', {
        message: this.message,
      }).then(response => {
        this.message = ''
        this.rafraichirMessages()
      })
    },
      rafraichirMessages() {
        window.axios.get('channels/'+this.$route.params.id+'/posts')
         .then(response => {
         this.messages = response.data
         })
         .catch(e => {
         this.errors.push(e)
    })
    }
  }
}  
</script>
