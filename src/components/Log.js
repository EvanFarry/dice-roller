import React from 'react';
import "../css/Log.css"

class Log extends React.Component {

  componentDidUpdate(){
    let box = document.getElementById('log')
    box.scrollTop = box.scrollHeight - box.clientHeight
  }

  render(){

    let rolls = this.props.rolls
    let roll = rolls.map((r) =>
      <li key={r.id}>
        <span className="time">{r.timeStamp}</span>
        <span>
          | D{r.dice}: You rolled a {r.value}
        </span>
      </li>
    )

    return(
      <div>
        <p>Roll Log</p>
        <ul id="log" className="log">
          {roll}
        </ul>
      </div>
    )
  }
}

export default Log
