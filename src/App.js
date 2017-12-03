import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


export default class App extends Component {
  constructor(){
    super();
    console.ignoredYellowBox = [
    'Setting a timer'
    ];    
  }
  
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDXXlmPgiVd8CsVZWcIA5hf_msz4l1dxhk',
      authDomain: 'manager-295b4.firebaseapp.com',
      databaseURL: 'https://manager-295b4.firebaseio.com',
      projectId: 'manager-295b4',
      storageBucket: 'manager-295b4.appspot.com',
      messagingSenderId: '1049579367012'
    };
    firebase.initializeApp(config);
  
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

