<template>
	<li>
        <span><strong>{{member.fullname}}</strong></span>
        <span>{{member.email}}</span>
        <button v-if="member._id !== $store.state.member._id" @click="deleteMember(member._id)">Supprimer</button>
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
        window.bus.$emit('rechargerMembres')
      })
    }
  }
}
</script>