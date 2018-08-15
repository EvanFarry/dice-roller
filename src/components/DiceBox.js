import React from 'react'

class DiceBox extends React.Component{

  handleDiceRoll(e){
    this.props.handleDiceRoll(e.target.value)
  }

  render(){
    return(
      <div>
        <p>Dice</p>
        <button onClick={this.handleDiceRoll.bind(this)} value="20">D20</button>
        <button onClick={this.handleDiceRoll.bind(this)} value="12">D12</button>
        <button onClick={this.handleDiceRoll.bind(this)} value="10">D10</button>
        <button onClick={this.handleDiceRoll.bind(this)} value="8">D8</button>
        <button onClick={this.handleDiceRoll.bind(this)} value="6">D6</button>
        <button onClick={this.handleDiceRoll.bind(this)} value="4">D4</button>
        <button onClick={this.handleDiceRoll.bind(this)} value="100">D100</button>

      </div>
    )
  }
}

export default DiceBox
