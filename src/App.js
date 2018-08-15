import React, { Component } from 'react';
import './App.css';
import uuid from "uuid"

//components
import Log from './components/Log'
import DiceBox from './components/DiceBox'

class App extends Component {
  constructor(props){
    super(props)
    this.handleDiceRoll = this.handleDiceRoll.bind(this)
    this.state = ({ rolls:[] }
    )
  }


  handleDiceRoll(di){
    //D100's include 0
    let value;
    if (di === '100') {
      value = Math.floor(Math.random() * di)}
    else {
      value = Math.floor(Math.random() * di) + 1 }
    let updatedRolls = this.state.rolls
    updatedRolls.push({
      id: uuid.v4(),
      value: value,
      dice: di,
      timeStamp: new Date().toLocaleTimeString().slice(0,-2)
    })
    this.setState({rolls: updatedRolls})
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Dice Roller</h1>
        <DiceBox handleDiceRoll={this.handleDiceRoll}/>
        <Log rolls={this.state.rolls}/>
      </div>
    );
  }
}

export default App;
