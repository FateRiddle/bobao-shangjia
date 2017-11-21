import React, { Component } from 'react'
import { getNow } from '../util'
import logo from 'images/logo.png'

export default class Title extends Component {
  state = { now: ['', ''] }

  updateTime = () => {
    this.setState({ now: getNow() })
  }

  componentDidMount = () => {
    setInterval(this.updateTime, 500)
  }

  render() {
    const { now } = this.state
    return (
      <div
        className="flex justify-between items-center h3"
        style={{ paddingLeft: '5%', paddingRight: '5%' }}
      >
        <img src={logo} className="h-75" alt="logo" />
        <div className="flex white f3">
          <div className="mr3">{now[0]}</div>
          <div>{now[1]}</div>
        </div>
      </div>
    )
  }
}
