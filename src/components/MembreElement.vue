<template>
  <div class="row">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{member.fullname}}</h5>
        <p class="card-text">{{member.email}}</p>
        <button v-if="member._id !== $store.state.member._id" @click="deleteMember(member._id)" class="btn btn-outline-danger">Supprimer</button>
      </div>
    </div>
  </div>
</div>  
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

<style scoped>

.row{

text-align: center;
width: 100%;
margin-bottom: 5px;
}


</style>