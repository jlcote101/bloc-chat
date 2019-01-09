import React, {Component} from "react";
import User from './User';
import 'bootstrap';
import './RoomList.css';

class RoomList extends Component {
  constructor(props){
    super(props);

    this.state = {
      rooms: [],
      newRoomName: ''
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;

      this.setState({rooms: this.state.rooms.concat(room) });

    });
  }

  handleChange(event) {
    this.setState({ newRoomName: event.target.value });
  }

  createRoom(event){
    event.preventDefault();
    const newRoom = this.state.newRoomName;
    this.roomsRef.push({
      name: newRoom
    });
    const emptyString = '';
    this.setState({newRoomName: emptyString});
  }

  deleteRoom(room){
    this.roomsRef.child(room.key).remove();
    this.setState({rooms: this.state.rooms.filter((item) => item.key !== room.key)
    });
  }

  render () {
    return (
      <div>
        <User
          firebase={this.props.firebase}
          user={this.props.user}
          userName={this.props.userName}
          setUser={(user) => this.props.setUser(user)}
        />
        <ul id="room-list">
          {this.state.rooms.map((room, index) =>
            <div>
            <a
              key={ room.key }
              onClick={(key) => this.props.selectActiveRoom(room.key)}
              href= "#">
              <h4>{room.name}</h4>
            </a>
            <button onClick={ () => this.deleteRoom(room)}>
            <span>x</span>
            </button>
            </div>
            )}
        </ul>

        <form onSubmit={ (event) => this.createRoom(event)}>
          <input
            type='text'
            value={this.state.newRoomName}
            onChange={ (event) => this.handleChange(event)}
          />
          <input type='submit' value='Create Room'/>
        </form>
      </div>
    );
  }
}

export default RoomList;
