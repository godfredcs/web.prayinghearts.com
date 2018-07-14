import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

//import indexRoutes from './routes';
import {Login, Register} from './modules';

import configStore from './store';
const {store, persistor} = configStore();


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <div>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
