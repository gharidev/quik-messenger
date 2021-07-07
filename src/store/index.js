import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../db'

import { vuexfireMutations, firestoreAction } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    authLoading: true,
    chats: [],
    chatUsers: {}
  },
  getters: {
    currentUser(state) {
      return state.user;
    },
    chats(state) {
      return state.chats;
    },
    chatUsers(state){
      return state.chatUsers;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    ...vuexfireMutations
  },
  actions: {
    bindChats: firestoreAction(({ bindFirestoreRef }, { getters }) => {
      return bindFirestoreRef("chats", db
        .collection("chats").where("users", "array-contains", getters.currentUser.uid)
        .orderBy("updated", "desc"))
    }),
    unbindChats: firestoreAction(({ unbindFirestoreRef }) => {
      unbindFirestoreRef("chats")
    })
  },
  modules: {
  }
})
