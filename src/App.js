import React, { Component } from 'react';
import Game from './components/Game';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Game />
        </Provider>
      </div>
    );
  }
}

export default App;
