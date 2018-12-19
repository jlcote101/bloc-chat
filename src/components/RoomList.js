import React, {Component} from "react";

class RoomList extends Component {
  constructor(props){
    super(props);

    this.state = {
      rooms: [],
      newRoomName: ''
    };

    this.roomsRef = this.props.firebase.database().ref('Rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = {
        key: snapshot.key,
        value: snapshot.val()
      }
    this.setState({rooms: this.state.rooms.concat(room) })

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

  render () {
    return (
      <div>
        { this.state.rooms.map(room =>
          <div>
            { room.key }
            <h4>{room.name}</h4>
          </div>)}

        <form onSubmit={ (event) => this.createRoom(event)}>
          <input type='text'
          value={this.state.newRoomName}
          onChange={ (event) => this.handleChange(event)}/>
          <input type='submit' value='Create New Room'/>
        </form>
      </div>
    );
  }
}

export default RoomList;
