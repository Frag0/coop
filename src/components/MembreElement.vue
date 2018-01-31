<template>
  <div class="row">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{member.fullname}}</h5>
        <p class="card-text">{{member.email}}</p>
        <button v-if="member._id !== $store.state.member._id" @click="deleteMember(member._id)" class="btn btn-outline-danger glyphicon glyphicon-trash">Supprimer</button>
      </div>
    </div>
  </div>
</div>  

<!--	<li>
        <span><strong>{{member.fullname}}</strong></span>
        <span>{{member.email}}</span>
        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
        <button v-if="member._id !== $store.state.member._id" @click="deleteMember(member._id)">Supprimer</button>
      </li>-->

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
}


</style>