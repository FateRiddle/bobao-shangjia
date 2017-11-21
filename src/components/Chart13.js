import React, { Component } from 'react'
import List from './List'
import { getCityTotal } from 'api'
import { orange, red } from 'color.js'
import { duration } from 'util.js'

export default class Chart13 extends Component {
  state = { chartData: [] }

  render() {
    const { chartData } = this.state
    const cities = chartData.map(d => d.city)
    const sum = chartData.map(d => d.sum)
    const percentage = chartData.map(d => d.percentage.toFixed(2) + '%')
    return (
      <div className="pt3 h-100" style={{ background: '#111' }}>
        <header className="mv3 white tracked f4 b tc mb3">订单量年度TOP10</header>
        <main className="flex justify-around ph3 h-75">
          <List name="城市" data={cities} color={red} />
          <List name="订单量" data={sum} color={orange} />
          <List name="占比" data={percentage} color={orange} />
        </main>
      </div>
    )
  }

  update = () => {
    getCityTotal().then(res => {
      // console.log(res, 'city')
      this.setState({ chartData: res })
    })
  }

  componentDidMount = () => {
    this.update()
    setInterval(this.update, duration)
  }
}
