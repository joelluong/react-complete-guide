import React, { Component, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';

// class App extends Component
const app = pros => {
// default way to create state in class base component

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Joel', age: 25},
      { name: 'Manu', age: 28},
      { name: 'Cindy', age: 26}
    ]
    }
  );

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('was clicked!');
    // DONT DO THIS: personsState.persons[0].name = 'Joel'
    setPersonsState( 
      {
        persons: [
          { name: 'Joel Luong', age: 25},
          { name: 'Manu', age: 28},
          { name: 'Cindy', age: 24}
        ]
      }
     )
  }

  return (
    <div className="App">
      <h1>Hi, I am a React app</h1>
      <p>This is really working </p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={this.switchNameHandler}> My hobbies: Soccer</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
}

export default app;