<template>
  <li v-if="!modif">
    <span>{{message.message}}</span>
    <button @click="modification">Modifier</button> 
    <button @click="deletePost(message._id)">Supprimer</button>   
  </li>
  <li v-else>
    <input type="text" v-model="messageModif" @keyup.enter="modifPost(message._id)" @keyup.escape="modification">
    <button @click="modification">Annuler</button>  
  </li>
</template>

<script>
export default {
  name: 'ConversationMessage',
  props: ['message'],
  data () {
    return {
      modif:false,
      messageModif: ""
    }
  },
  methods: {
    deletePost(id) {
      window.axios.delete('channels/'+this.$route.params.id+'/posts/'+id);
    },
    modification(){
        if (this.modif) {
          this.modif=false
        }
        else {
          this.modif=true
          this.messageModif = this.message.message
        }
    },
    modifPost(id){
      window.axios.put('channels/'+this.$route.params.id+'/posts/'+id, {
        message: this.messageModif
      }).then(response => {
         this.modif=false;
         this.message.message=this.messageModif
      })
    }
  }
}  
</script>