<template>
  <div>
   <div>
     Vous êtes connecté
     <button @click="logOut">Se déconnecter</button>
     <router-link to="/conversation-creation">Créer une conversation</router-link>
     <router-link to="/membres">Liste des membres</router-link>
    </div>
    <div>
      <ul>
       <li v-for="channel of channels">
        <p><strong><router-link :to="{ name: 'conversation-affichage', params : {id:channel._id} }">{{channel.label}}</router-link></strong></p>
        <p>{{channel.topic}}</p>
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
    window.axios.get('channels')
    .then(response => {
      this.channels = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  updated() {
    window.axios.get('channels')
    .then(response => {
      this.channels = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    logOut() {
      window.bus.$emit('logout');
    },
    deleteChannel(id) {
      window.axios.delete('channels/'+id);
    }
  }
}
</script>