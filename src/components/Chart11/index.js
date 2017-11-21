import React, { Component } from 'react'
import Chart from './Chart11'
import { getQudao } from 'api'
import { duration } from 'util.js'

export default class Chart11 extends Component {
  state = {
    chartData: [],
  }

  update = () => {
    getQudao().then(res => {
      this.setState({ chartData: res })
    })
  }

  componentDidMount = () => {
    this.update()
    setInterval(this.update, duration)
  }

  render() {
    const { chartData } = this.state
    return (
      <div className="w-100 h-100 flex flex-column">
        <div className="white pt4 pb3 tc f4 b tracked">各渠道每日订单</div>
        <div className="h-100 flex items-center">
          <Chart chartData={chartData} />
        </div>
      </div>
    )
  }
}
