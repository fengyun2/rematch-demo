import {init} from '@rematch/core'
import count from './count'
import todos from './todos'

// generate Redux store
const store = init({
  models: {
    count,
    todos
  }
})

export default store