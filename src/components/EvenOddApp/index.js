// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    type: 'Even',
  }

  increase = () => {
    const {count} = this.state
    const a = count + Math.floor(Math.random() * 100)
    let b
    if (a % 2 === 0) {
      b = 'Even'
    } else {
      b = 'Odd'
    }
    this.setState(() => ({count: a, type: b}))
  }

  render() {
    const {count, type} = this.state
    return (
      <div className="container">
        <div className="box">
          <h1>Count {count}</h1>
          <p>Count is {type}</p>
          <button type="button" onClick={this.increase} className="button">
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
