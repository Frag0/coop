<template>
  <div>
     <router-link to="/conversation-creation">Créer une conversation</router-link>
    <div>
      <ul>
       <li v-for="channel of channels">
        <span><strong><router-link :to="{ name: 'conversation-affichage', params : {id:channel._id} }">{{channel.label}}</router-link></strong></span>
        <span>{{channel.topic}}</span>
        <router-link :to="{ name: 'conversation-modification', params : {id:channel._id} }">Modifier</router-link>
        <button @click="deleteChannel(channel._id)">Supprimer</button>
      </li>
     </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ConversationsListe',
  data () {
    return {
      channels : []
    }
  },
  mounted() {
    this.rafraichirConvos()
  },
  methods: {
    deleteChannel(id) {
      window.axios.delete('channels/'+id).then(response => {
        this.rafraichirConvos()
      })
    },
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