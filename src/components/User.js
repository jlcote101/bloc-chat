import React, {Component} from 'react';
import './User.css';

class User extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider);
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  displayUser(user){
    if(user === null){
      return(<h3>Welcome Guest!</h3>);
    }else{
      return(<h3>Welcome {user.displayName}!</h3>)
    };
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>{this.displayUser(this.props.user)}</h3>
            <button onClick={ () => this.signIn() }>Sign In</button>
            <button onClick={ () => this.signOut() }>Sign Out</button>
          </div>
        </div>
      </div>
    )
  }
}

export default User;
