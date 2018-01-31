<template>
	<li>
        <span><strong>{{member.fullname}}</strong></span>
        <span>{{member.email}}</span>
        <button @click="deleteMember(member._id)">Supprimer</button>
      </li>
</template>

<script>
export default {
  name: 'MembreElement',
  props: ['member'],
  data () {
    return {
    }
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