import React, { Component } from 'react';
// import { Link } from 'react-router';
import base from './config';
import './App.css';

class InvitedBy extends Component() {
  constructor(){
    super();
    this.state = {
      invitations: {}
    }
  }

  componentDidMount() {
    this.sync = base.syncState(`${this.props.params.InviteBy}/invitations`, {
      state: 'invitations',
      context: this,
      asArray: true
    })
  }


  render() {
    return(
      <h1>YOU HAVE BEEN INVITED!</h1>
    );
  }
}

export default InvitedBy;
