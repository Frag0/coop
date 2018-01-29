<template>
  <div>
    <h1>Membres</h1>
      <ul>
       <li v-for="member of members">
        <span><strong>{{member.fullname}}</strong></span>
        <span>{{member.email}}</span>
        <button @click="deleteMember(member._id)">Supprimer</button>
      </li>
     </ul>  
  </div>
</template>

<script>
export default {
  name: 'MembresListe',
  data () {
    return {
      members : []
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
    this.rafraichirMembres
  },
  methods: {
    deleteMember(id) {
      window.axios.delete('members/'+id).then(response => {
        this.rafraichirMembres()
      })
    },
    rafraichirMembres(){
      window.axios.get('members')
    .then(response => {
      this.members = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
  }
}
</script>