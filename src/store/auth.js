import axios from "axios";
import { isJwtExpired } from "jwt-check-expiration";
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core';
import { parseJwt } from "@/utils/Jwt";
import { URL as MyUrl } from "@/utils/URL";
import router from '@/router'

export const tokenReceivers = []
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: useLocalStorage('token', null),
    hash: null,
    hsp: useLocalStorage('hsp', null),
    opid: null,
    opname: null,
    isLogin: false,
  }),
  getters:{
    crtno(){
      return parseJwt(this.token)["crtno"] || ''
    }
  },
  actions:{
    async Authentication(){
      let key = MyUrl.getCaseInsensitive('key')
      if (!key && (!this.token || isJwtExpired(this.token))) this.Logout()
      if (key) {
        this.token = await this.GetToken(key);
        // 移除後面所有的參數(避免 F5 會吃到過期的  KEY，導致 token 沒過期 KEY 就先過期了)
        router.push('/')
      }
      this.setAuth()
    },
    async Logout() {
      this.token = null;
      window.location.href = `https://sso.ktgh.com.tw?returnurl=${window.location.href}`;
    },
    async GetToken(key) {
      try {
        const res = await axios.post('https://sso.ktgh.com.tw/api/token', {  key  });
        const data = res.data;
        if (data.success) {
          return data.token
        }
      } catch (error) {
        console.log('取得登入資訊失敗',error)
        throw '取得登入資訊失敗';
      }
    },
    setAuth() {
      this.isLogin = true;
      const payload = parseJwt(this.token);
      this.opid = payload.opid;
      this.opname= payload.opname;
      this.hsp = payload.hspnme
      if (!!this.token) tokenReceivers.forEach(x=>x(this.token))
    },
  }
})
