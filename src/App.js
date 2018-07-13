import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import configStore from './store';
const { store, persistor } = configStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <header>This is the beginning of the beginning</header>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}
