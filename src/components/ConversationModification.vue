<template>
  <form @submit="modifConversation">
   <div>
     <input type="text" v-model="label" placeholder="Label">
     <input type="text" v-model="topic" placeholder="Topic">
     <input type="submit" value="Modifier la conversation">
    </div>
  </form>
</template>

<script>
export default {
  name: 'ConversationModification',
  data () {
    return {
      label: '',
      topic : '',
    }
  },
  methods: {
    modifConversation() {   
      window.axios.put('channels/'+this.$route.params.id, {
        label: this.label,
        topic: this.topic,
      }).then(response => {
        console.log('La conversation '+response.data.label+' a été modification')
        this.$router.push({path: '/conversations'});  
      })
    }
  }
}
</script>