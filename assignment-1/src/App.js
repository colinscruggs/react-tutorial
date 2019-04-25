import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    users: [
      { username: 'Lin3freak'},
      { username: 'xI FreakzZ'}
    ]
  }

  render() {
    // insert inline styling const here
  
  
    return (
      <div className="App">
        <UserInput />
        <UserOutput username="Lin3freak"/>
        <UserOutput username="xI FreakzZ"/>
      </div>
    );
  };

}

export default App;
