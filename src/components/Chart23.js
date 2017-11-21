import React, { Component } from 'react'
import List from './List'
import { orange, red } from 'color.js'

export default class Chart23 extends Component {
  render() {
    const { chartData } = this.props
    // console.log(chartData, '23')
    const cities = chartData.map(d => d.city)
    const points = chartData.map(d => d.points.toFixed(1))
    return (
      <div className="h-100" style={{ background: '#111' }}>
        <header className="pv3 f4 white b tracked tc">昨日得分TOP10</header>
        <main
          className="flex justify-around h-75"
          style={{ paddingLeft: '5rem', paddingRight: '5rem' }}
        >
          <List name="城市" data={cities} color={red} />
          <List name="得分" data={points} color={orange} />
        </main>
      </div>
    )
  }
}
