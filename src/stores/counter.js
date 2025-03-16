import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // store도 composable 과 같이 use로 시작한다.
  // app 전체에서 고유한 아이디
  state: () => ({
    counter: 1,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
  },
})
