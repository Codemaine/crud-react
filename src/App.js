import React from 'react';
import './App.css';
import Functions from './Functions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  AddNumber = (e) => {
    this.setState({number: this.state.number + 1})
  }

  RemoveNumber = (e) => {
    this.setState({number: this.state.number - 1})
    if (this.state.number === 0){
      console.log('The number is to low to reduce')
      this.setState({number: 0})
      return false
    }
  }

  ResetNumber = (e) => {
    this.setState({number: 0})
    if ( this.state.number === 0 ){
      console.log('The number is already '+this.state.number)
    }
  }

  RandomNumber = (e) => {
    this.setState({number: Math.floor(Math.random() *1000 )})
  }

  render(){  
  return(
    <div>
      <h1>Counter: {this.state.number}</h1>
      <hr />
      <button onClick={this.AddNumber}>Add</button>
      <button onClick={this.RemoveNumber}>Remove</button>
      <button onClick={this.RandomNumber}>Random</button>
      <button onClick={this.ResetNumber}>Reset</button>
      <Functions />
    </div>
  )
  }
}

export default App;
