import React, {Component} from 'react';
import Message from "./Message";

class MessageList extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: [],
    };

    this.messageRef = this.props.firebase.database().ref('Messages');
  }

  componentDidMount() {
    this.messageRef.on('child_added', snapshot =>{
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({messages: this.state.messages.concat(message)});
    });
  }

  showRoomMessage(message, index){
    if (message.roomId === this.props.activeRoom){
      return (
        <li key={index} className="message">
          <p>{message.content}</p>
        </li>
      );
    }else{
      return
    }
  }

  render () {
    return (
      <div className="message-container">
        <div className="messages">
          <h1> {this.props.activeRoomTitle}</h1>
          {
            this.state.messages.map((message, index)=>
              this.showRoomMessage(message, index)
            )
          }
        </div>
        <Message
          firebase={this.props.firebase}
          activeRoom={this.props.activeRoom}
        />
      </div>

    );
  }
}

export default MessageList;
