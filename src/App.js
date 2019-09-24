import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Joel', age: 25},
      { name: 'Manu', age: 28},
      { name: 'Cindy', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('was clicked!');
    // DONT DO THIS: this.state.persons[0].name = 'Joel'
    this.setState( 
      {
        persons: [
          { name: 'Joel Luong', age: 25},
          { name: 'Manu', age: 28},
          { name: 'Cindy', age: 24}
        ]
      }
     )
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React app</h1>
        <p>This is really working </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Soccer</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', null, 'h1', 'Hello Joel')
  }
}

export default App;
