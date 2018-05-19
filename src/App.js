import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import Count from './containers/Count'
import ListItems from './containers/ListItems'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Count />
          <ListItems />
        </div>
      </Provider>
    );
  }
}

export default App;
