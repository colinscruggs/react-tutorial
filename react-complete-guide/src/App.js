import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// one way to make a component; make a class that extends Component
// and define a render function that returns JSX, or HTML in JS
class App extends Component {
  state = {
    persons: [
      { name: 'Colin', age: 21 },
      { name: 'Devon', age: 23 },
      { name: 'John', age: 21 }
    ],
    otherState: 'some other value'
  }

  // custom event handler function
  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Colin Andrew Scruggs';
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Devon', age: 23 },
        { name: 'John', age: 99 }
      ]
      } ); 
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 21 },
        { name: 'Devon', age: 23 },
        { name: 'John', age: 99 }
      ]
      } ); 
  }

  render() {
    // inline styling: applied to 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>People</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Colin!! (bound function)')}>
          Switch Name
        </button>
        <br></br>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Colin! (from prop)')}
          changed={this.nameChangedHandler} >
          My hobbies include photography and making music.</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );

  }
}

// export components here:
export default App;