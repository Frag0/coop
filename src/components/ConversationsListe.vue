<template>
  <div>
    <div>
      <h1>Conversations</h1>
      <ul>
       <conversationElement v-for="channel of channels" :key="channel._id" :channel="channel"></conversationElement>
     </ul>
    </div>
  </div>

</template>

<script>

import ConversationElement from './ConversationElement.vue'
export default {
  name: 'ConversationsListe',
  components: {ConversationElement},
  data () {
    return {
      channels : [],
      channel: ''
    }
  },
  mounted() {
    this.rafraichirConvos()
    window.bus.$on('rechargerConvos', this.rafraichirConvos)
  },
  methods: {
    rafraichirConvos() {
      window.axios.get('channels').then(response => {
        this.channels = response.data
      }).catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
<style scoped>
  
h1{

text-align: center;

}

  
</style>
