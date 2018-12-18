import React, {Component} from "react";

class RoomList extends Component {
  constructor(props){
    super(props);

    this.state = {
      rooms: ["room1", "room 2", "room 3"]
    };

    this.roomsRef = this.props.firebase.database().ref('Rooms');
}

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = {
      key: snapshot.key,
      value: snapshot.val()
}
    // const room = snapshot.key;
    // room.key = snapshot.key;
    this.setState({rooms: this.state.rooms.concat(room) })

  });
}

  render () {
    return (
   <div>
    { this.state.rooms.map(room => <div>{ room.key }</div>)}
   </div>
);
}
}

export default RoomList;
