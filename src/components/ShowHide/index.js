// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {change1: true, change2: true}

  onChange1 = () => {
    this.setState(prevState => ({
      change1: true,
    }))
  }
  onChange2 = () => {
    this.setState(prevState => ({
      change2: true,
    }))
  }

  render() {
    const {change1} = this.state
    const {change2} = this.state
    let authButton1
    let authButton2
    if (change1 === true) {
      authButton1 = (
        <div className="card">
          <p>Joe</p>
        </div>
      )
    }
    if (change2 === true) {
      authButton2 = (
        <div className="card">
          <p>Jonas</p>
        </div>
      )
    }
    return (
      <div className="main_container">
        <h1 className="heading">Show/Hide</h1>
        <button className="button" onClick={this.onChange1}>
          Show/Hide Firstname
        </button>
        <button className="button" onClick={this.onChange2}>
          Show/Hide Lastname
        </button>
        {authButton1}
        {authButton2}
      </div>
    )
  }
}
export default ShowHide
