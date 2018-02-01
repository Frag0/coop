<template>
       
  <div class="card w-100 text-center conv">
    <div class="card-body">
      <h5 class="card-title"> <router-link :to="{ name: 'conversation-affichage', params : {id:channel._id} }">{{channel.label}}</router-link></h5>
      <p class="card-text"><span>{{channel.topic}}</span></p>
       <router-link :to="{ name: 'conversation-modification', params : {id:channel._id} }" class="btn btn-outline-warning">Modifier</router-link>
       <button @click="deleteChannel(channel._id)" class="btn btn-outline-danger">Supprimer</button>
    </div>
  </div>
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
      window.axios.delete('channels/'+id).then(response => {
        window.bus.$emit('rechargerConvos')
      })
    },
  }
}
</script>

<style scoped>
.conv{

  margin-bottom:5px;
}

</style>