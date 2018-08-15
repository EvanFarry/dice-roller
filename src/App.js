import React, { Component } from 'react';
import './App.css';
import uuid from "uuid"

class App extends Component {
  constructor(props){
    super(props)
    this.handleDiceRoll = this.handleDiceRoll.bind(this)
    this.state = ({
        rolls:[{
            id: uuid.v4(),
            value: 14,
            dice: '20'},]}
    )
  }


  handleDiceRoll(di){
    let value = Math.floor(Math.random() * di) + 1
    let updatedRolls = this.state.rolls
    updatedRolls.push({
      id: uuid.v4(),
      value: value,
      dice: di
    })
    this.setState({rolls: updatedRolls})
  }

  render() {
    return (
      <div className="App">
        <p>
          Hello Dice Roller
        </p>

        <DiceBox handleDiceRoll={this.handleDiceRoll}/>
        <Log rolls={this.state.rolls}/>
      </div>
    );
  }
}

class Log extends React.Component {

  render(){
    let rolls = this.props.rolls
    let roll = rolls.map((r) =>
      <li key={r.id}>
        D{r.dice}: You rolled a {r.value}
      </li>
    )
    return(
      <div>
        <p>Roll Log</p>
        <ul>
          {roll}
        </ul>
      </div>
    )
  }
}

class DiceBox extends React.Component{

  handleDiceRoll(e){
    this.props.handleDiceRoll(e.target.value)
  }

  render(){
    return(
      <div>
        <h1>Dice</h1>
        <button onClick={this.handleDiceRoll.bind(this)} value="20">D20</button>
        <button onClick={this.handleDiceRoll.bind(this)} value="10">D10</button>
        <button onClick={this.handleDiceRoll.bind(this)} value="8">D8</button>

      </div>
    )
  }
}

export default App;
