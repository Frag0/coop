<template>
  <li v-if="!modif">
    <span v-for="member of members" v-if="message.member_id === member._id">{{member.fullname}}</span>
    <span>{{message.message}}</span>
    <span v-if="message.member_id === $store.state.member._id">
      <button @click="modification">Modifier</button> 
      <button @click="deletePost(message._id)">Supprimer</button>
    </span>
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
      modif: false,
      messageModif: "",
      members: [],
    }
  },
  mounted() {
    window.axios.get('members')
    .then(response => {
      this.members = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    deletePost(id) {
      window.axios.delete('channels/'+this.$route.params.id+'/posts/'+id).then(response => {
        window.bus.$emit('rechargerMessage', id)
      })
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