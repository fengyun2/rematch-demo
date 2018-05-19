import React, { Component } from 'react';
import {init} from '@rematch/core'
import {Provider} from 'react-redux'
import models from './models'
import Count from './containers/Count'

// generate Redux store
const store = init({
  models
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Count />
      </Provider>
    );
  }
}

export default App;
