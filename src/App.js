import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import base from './config';
import './App.css';

class App extends Component {

constructor(){
  super();
  this.state = {
    users: ""
  };
}

  componentDidMount (){
    var url = "http://tiy-orl-proxy.herokuapp.com/trivia?category=Star%20Wars&limit=5&random=1";
    axios.get(url).then((response) => {
      this.setState({
        data: response
      })
      console.log(response)
    })
  }

  signIn(){
    base.authWithOAuthPopup(
      'github',
    this.authStateChanged.bind(this))
  }


  signOut(){
    base.unauth()
    this.setState({
      user: ""
    })
  }

  authStateChanged (error, user) {
   if (error) {
     alert('wrong password')
   } else if (user){
     console.log(user)
         this.setState({
           user: user.email
         })
       }
     }




  render() {
    return (
      <div className="login">
        <div className="title">
          <img className="gameTitle" src={require ('../Trivia Images/title.png')} alt="Game Title" />
        </div>
        <div className="userGithub">
          <button onClick={this.signIn.bind(this)}><Link to="/Invite">Login With Github</Link></button>
        </div>
        <img className="octocat" src={require ('../Trivia Images/stormtrooper_octocat.png')} alt="Octocat Storm Trooper" />
        {this.props.children}
      </div>
    );
  }
}

export default App;
