import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';


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
  constructor(){
    super();

    this.state = {
      activeRoom: '',
    };
  }

  selectActiveRoom(key, title){
    const selectedActiveRoom = key;
    const newActiveRoomTitle = title;
    this.setState({ activeRoom: selectedActiveRoom, activeRoomTitle: newActiveRoomTitle});
  }

  render() {
    return (
      <div>
        <RoomList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          selectActiveRoom={(key, title) => this.selectActiveRoom(key, title)}
          />
        <MessageList
          firebase={firebase}
          activeRoom={ this.state.activeRoom}
          selectActiveRoom={this.state.activeRoomTitle}
          />
        </div>
    );
  }
}

export default App;
