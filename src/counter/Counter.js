import React, { Component } from 'react';
class Counter extends Component {

  state = { counterValue: 0 }

  // inc(){
  inc = () => {
    this.setState({ counterValue: this.state.counterValue + 1 })
  }
  dec = () => {
    this.setState({ counterValue: this.state.counterValue - 1 })
  }
  render() {
    //Object Destructuring---- WOW ********
    //const counterName = this.props.counterName
    const { counterName } = this.props
    const { counterValue } = this.state
    return(
      <div>
        <h1 style={{ backgroundColor: counterName }}>{counterName } Counter</h1>
        <p>
          { counterValue }
        </p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}
export default Counter;