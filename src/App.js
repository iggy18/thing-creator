import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      things: [
        {id: 1 , name: "thing one"},
        {id: 2 , name: "thing two"},
        {id: 3 , name: "thing four"}
      ]
    }
    this.onCreated = this.onCreated.bind(this);
  }
  // update state for list
  onCreated(thing) {
    const things = [...this.state.things, thing]
    this.setState({things}) 
  }

  render() {
    return (
      <div className="App">
        <Header thingCounter={this.state.things.length}/>
        <ThingList things={this.state.things} onCreated={this.onCreated} />
        <Footer />
      </div>
    );
  }
}

function Header(props) {
  return (
    <header>
      <h1>How many things are there?{props.thingCounter}</h1>
    </header>
  );
}

class ThingList extends Component {
  render() {
    return(
      <div>
        <ThingForm onCreated={this.props.onCreated}/>
        <ul>
          {this.props.things.map(things => (
            <ThingItem key={things.id} name={things.name} />
          ))}
        </ul>
      </div>
    );
  }
}

class ThingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCreated(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function ThingItem(props) {
  return <li>{props.name}</li>
}

function Footer () {
  return(
    <footer>
      <p>I am a footer</p>
    </footer>
  );
}




export default App;
