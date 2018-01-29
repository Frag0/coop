import Vue from 'vue'
import Router from 'vue-router'
import MembreCreation from '@/components/MembreCreation'
import Connexion from '@/components/Connexion'
import ConversationsListe from '@/components/ConversationsListe.vue'
import ConversationCreation from '@/components/ConversationCreation.vue'
import ConversationModification from '@/components/ConversationModification.vue'
import ConversationAffichage from '@/components/ConversationAffichage.vue'
import MembresListe from '@/components/MembresListe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/connexion',
      component: Connexion
    },
    {
      path: '/membre-creation',
      component: MembreCreation
    },
    {
      path: '/conversations',
      component: ConversationsListe
    },
    {
      path: '/conversation-creation',
      component: ConversationCreation
    },
    {
      name: 'conversation-modification',
      path: '/conversation-modification/:id',
      component: ConversationModification
    },
    {
      name: 'conversation-affichage',
      path: '/conversation-affichage/:id',
      component: ConversationAffichage
    },
    {
      path: '/membres',
      component: MembresListe
    }
  ]
})
