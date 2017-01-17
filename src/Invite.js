import React, { Component } from 'react';
import { Link } from 'react-router';
import base from './config';
import './App.css';

class Invite extends Component {
  constructor(){
    super();
    this.state={
      users: [],
      invitations: []
    }
  }

  componentDidMount () {
      // base.fetch(`${this.props.params.invite}/users`, {
      //   context: this,
      //   then: (data) => {
      //     this.setState({
      //       users: data
      //     })
      //   }
      // })
      this.sync = base.syncState(`${this.props.params.Invite}/users`, {
        state: 'users',
        context: this,
        asArray: true
      })
    }

    render() {
      return (
        <div>
          <h1 className="inviteTitle">THE ROGUE LIST</h1>
          <h4 className="inviteTitle">INVITE YOUR OPPONENT</h4>
          <img className="lightSaber" src={require ('../Trivia Images/lightsaber6.jpg')} alt="Light Saber" />
          <ul className="userList">
            {this.state.users.map(user => {
              return <li key={user}>{user}</li>
            })
          }
          </ul>
          <button className="seeInvites"><Link to="/InvitedBy">Click To See Who Invited You</Link></button>
        </div>
      );
    }

}

export default Invite;
