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
      window.axios.delete('members/'+id)
    }
  }
}
</script>

<style scoped>

</style>