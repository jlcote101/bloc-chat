import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
import 'bootstrap';




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
      user: ''
    };
  }

  selectActiveRoom(key, title){
    const selectedActiveRoom = key;
    const newActiveRoomTitle = title;
    this.setState({ activeRoom: selectedActiveRoom, activeRoomTitle: newActiveRoomTitle});
  }

  setUser (user) {
    this.setState({user: user});
  }


  render() {
    return (
      <div>
          <div className="jumbotron">
            <p className="jen"> . </p>
            <h1 className='bloc'>Welcome to Bloc Chat</h1>
              <p className="bottom-text">A platform to connect anyone, anywhere.</p>
              <p className="jen"> . </p>
          </div>





      <div className="app">
        <RoomList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          selectActiveRoom={(key, title) => this.selectActiveRoom(key, title)}
          user={this.state.user}
          setUser={(user) => this.setUser(user)}
          />
        <MessageList
          firebase={firebase}
          activeRoom={ this.state.activeRoom}
          selectActiveRoom={this.state.activeRoomTitle}
          user={this.state.user}
          />
          </div>
          </div>
    );
  }
}

export default App;
