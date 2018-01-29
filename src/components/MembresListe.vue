<template>
  <div>
    <button @click="logOut">Se déconnecter</button>
     <router-link to="/conversations">Conversations</router-link>
     <router-link to="/membres">Liste des membres</router-link>
    <h1>Membres</h1>
      <ul>
       <li v-for="member of members">
        <p><strong>{{member.fullname}}</strong></p>
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
  },
  updated() {
    window.axios.get('members')
    .then(response => {
      this.members = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    logOut() {
      window.bus.$emit('logout');
    },
    deleteMember(id) {
      window.axios.delete('members/'+id);
    }
  }
}
</script>