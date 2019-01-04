import React, {Component} from 'react';

class Message extends Component {
  constructor(props){
    super(props);

    this.state={
      input: ''
    };

    this.messagesRef = this.props.firebase.database().ref('Messages');
  }

  handleChange(event){
    this.setState({ input: event.target.value});
  }

  sendMessage(event){
    event.preventDefault();
    const newMessage = this.state.input;
    let timeStamp = new Date();
    timeStamp = timeStamp.toLocaleTimeString();
    console.log(newMessage);

    const emptyString = '';
    this.setState({ input: emptyString})
  }

  render () {
    return (
      <div>
        <form onSubmit={ (event) => this.sendMessage(event)}>
          <input
            type='text'
            value={this.state.input}
            onChange={(event) => this.handleChange(event)}
            />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Message;
