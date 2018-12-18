import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAScgBOFfqBbJX3IpEOu8pCWedX3i403G4",
    authDomain: "bloc-chat-300d8.firebaseapp.com",
    databaseURL: "https://bloc-chat-300d8.firebaseio.com",
    projectId: "bloc-chat-300d8",
    storageBucket: "bloc-chat-300d8.appspot.com",
    messagingSenderId: "119393761945"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <RoomList firebase={firebase}/>
    );
  }
}

export default App;
