import { defineStore, acceptHMRUpdate } from 'pinia'
import {api} from 'boot/axios.js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: undefined,
    user: undefined,
    categories: [],
    menus: []
  }),

  getters: {},

  actions: {
    successLogin(data) {
      this.token = data.token;
      this.user = {id: data.user_id };

      api.post("", {
        "token": this.token,
        "method": "user.get_userinfo",
        "params": {
          "user_id": this.user.id
        }
      }).then(res => {
        this.user = { ...this.user, ...res.data.data };
      }).catch(() => {});

      api.post("", {
        "token": this.token,
        "method": "user.get_usermenus",
        "params": {
          "user_id": 1
        }
      }).then(res => {
        this.menus = res.data.menus;
      }).catch(() => {});


    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
