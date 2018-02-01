<template>
  <div>
     <h1>{{channel.label}}</h1>
     <hr>
     <h2>{{channel.topic}}</h2>
     <hr>
     <ul>
        <conversationMessage v-for="message of messages" :key="message._id" :message="message"></conversationMessage>

     </ul>
    <hr>
     <form @submit="creerMessage">
     <div>
      <input type="text" v-model="message" class="chat">
      <input type="submit" value="Envoyer" class="btn btn-outline-success">
      <button @click="rafraichirMessages" class="btn btn-outline-info">Rafraîchir</button>
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
      message : '',
      timer: ''
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
    this.timer = setInterval(this.rafraichirMessages, 5000)
    window.bus.$on('rechargerMessage', this.rafraichirMessages)
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
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}  
</script>
<style scoped>
  
h1,h2{

text-align: center;

}

.chat{
width: 90%

}
</style>