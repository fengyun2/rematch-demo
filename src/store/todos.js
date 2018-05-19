// store/todos.js

import {delay} from '../utils/tool'
const todos = {
  state: {
    10086: {text: 'call me', done: true},
    10010: {text: 'stop', done: false}
  },
  reducers: {
    toggleDone(state, id) {
      const todo = {
        ...state[id],done: !state[id].done
      }
      return {
        ...state,
        [id]: todo
      }
    },
    add(state, text){
      return {
        ...state,
        [Date.now()]: {text, done: false}
      }
    },
    remove(state, id) {
      delete state[id]
      return {
        ...state
      }
    }
  },
  effects: {
    async asyncRemove(id, state) {
      await delay(1000)
      this.remove(id)
    }
  }
}

export default todos