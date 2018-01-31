<template>
  <div>
    <h1>Membres</h1>
      <ul>
       <membreElement v-for="member of members" :member="member"></membreElement>
     </ul>  
  </div>
</template>

<script>

import MembreElement from './MembreElement.vue'

export default {
  name: 'MembresListe',
  components: {MembreElement},
  data () {
    return {
      members : [],
      member : ''
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