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
    chatUsers: {},
    isTouch: false
  },
  getters: {
    currentUser(state) {
      return state.user;
    },
    chats(state) {
      return state.chats;
    },
    chatUsers(state) {
      return state.chatUsers;
    },
    isTouch(state) {
      return state.isTouch;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setChatUsers(state, { chatId, userData }) {
      state.chatUsers = { ...state.chatUsers, [chatId]: userData };
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
    }),
    logout({ dispatch, commit, getters, state }) {
      commit('setUser', null);
      dispatch('unbindChats');
      state.chatUsers = {}
      console.log('Chats after unbind', getters.chats);
    },
    async deleteChat(_, chat) {
      await db.collection('chats').doc(chat.id).delete()
    }
  },
  modules: {
  }
})
