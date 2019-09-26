import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';

class App extends Component 
{
  state = {
    persons: [
      { id: '1', name: 'Joel', age: 25},
      { id: '2', name: 'Manu', age: 28},
      { id: '3', name: 'Cindy', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {return p.id === id});

    const person = {
      ...this.state.persons[personIndex] // just copy single element
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons]; // copy whole array

    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]; // copy the array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // default way to create state in class base component
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(index)}
              key={person.id} 
              name={person.name} 
              age={person.age}
              changed = {(event) => this.nameChangeHandler(event, person.id)}/>
          })}
            {/* this.nameChangeHandler.bind(this, person.Id) */}
            {/* <Person 
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Nathan!')}
              changed={this.nameChangeHandler}> My hobbies: Soccer</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} /> */}
          </div>
      );
    }

    return (
      <div className="App">
      <h1>Hi, I am a React app</h1>
      <p>This is really working </p>
      <button
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
    </div>
    );
  }
}

export default App;
