// models/count.js

import {delay} from '../utils/tool'

const count = {
  state: 0,
  reducers: {
    addBy(state, payload) {
      return state + payload
    }
  },
  effects: {
    async addByAsync(payload, state) {
      await delay(1000)
      this.addBy(1)
    }
  }
}

export default count