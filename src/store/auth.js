// Utilities
import { isJwtExpired } from "jwt-check-expiration";
import { parseJwt } from "@/utils/Jwt";
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core';
import { URL as MyUrl } from "@/utils/URL";
import { useAppStore } from './app';
import axios from "axios";


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
      const appStore = useAppStore()
      const urlParams = MyUrl.URLSearchParams;
      let key = urlParams.get("Key") || urlParams.get("key") || urlParams.get("KEY");
      if (key) {
        this.token = await this.GetToken(key);
        // todo handle gettoken failure
        appStore.crtno = this.crtno;
        return
      }
      //#region 沒有 key 的情況
      // token 有效
      if (!!this.token && !isJwtExpired(this.token)) {
        // 嘗試 reflash token
        // await this.ReflashToken();
        this.setAuth();
      }
      // 沒有 token 或 token 過期
      if (!this.token || isJwtExpired(this.token)) this.Logout()
      //#endregion
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
        console.log('authStore',error)
        throw '取得登入資訊失敗';
      }
    },
    setAuth() {
      this.isLogin = true;
      const payload = parseJwt(this.token);
      console.log('token data:',payload)
      this.opid = payload.opid;
      this.opname= payload.opname;
      this.hsp = payload.hspnme
      if (!!this.token) tokenReceivers.forEach(x=>x(token))
    },
  }
})
