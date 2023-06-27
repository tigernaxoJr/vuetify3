// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    inited: false,
    loadingHolders: [],
    afterInitCallBack: [],
  }),
  getters:{
    loading(){
      return this.loadingHolders.length > 0
    }
  },
  actions: {
    AddLoading(key){
      this.loadingHolders.push(key)
    },
    RemoveLoading(key){
      const idx = this.loadingHolders.indexOf(key)
      if(idx !== -1) this.loadingHolders.splice(idx, 1)
    }
  }
})
