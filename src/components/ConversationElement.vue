<template>
       <li>
        <span><strong><router-link :to="{ name: 'conversation-affichage', params : {id:channel._id} }">{{channel.label}}</router-link></strong></span>
        <span>{{channel.topic}}</span>
        <router-link :to="{ name: 'conversation-modification', params : {id:channel._id} }">Modifier</router-link>
        <button @click="deleteChannel(channel._id)">Supprimer</button>
      </li>
</template>

<script>
export default {
  name: 'ConversationElement',
  props: ['channel'],
  data () {
    return {
    }
  },
  methods: {
    deleteChannel(id) {
      window.axios.delete('channels/'+id)
    },
  }
}
</script>