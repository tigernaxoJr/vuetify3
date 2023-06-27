// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    inited: false,
    loading: false,
    afterInitCallBack: [],
    crtno: null
  }),
})
