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

  nameChangedHandler = (event) => {
    this.setState({
      users: [
        { username: 'MysteryMooseMan'},
        { username: event.target.value}
      ]
      } ); 
  }

  render() {
    // insert inline styling const here
    const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '50px 0 0 0'
    };

    return (
      <div className="App">
        <UserInput changed={this.nameChangedHandler} 
                   username={this.state.users[1].username} 
                   style={style}/>
        <UserOutput username={this.state.users[0].username}/>
        <UserOutput username={this.state.users[1].username}/>
      </div>
    );
  };

}

export default App;
