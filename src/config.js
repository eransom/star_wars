import Rebase from 're-base';

var config = {
    apiKey: "AIzaSyA1ldi6tYkW6YWwTSh0n0QastyIH2888Q4",
    authDomain: "star-wars-trivia.firebaseapp.com",
    databaseURL: "https://star-wars-trivia.firebaseio.com",
    storageBucket: "star-wars-trivia.appspot.com",
    messagingSenderId: "242877728739"
  };

const base = Rebase.createClass(config)

export default base
