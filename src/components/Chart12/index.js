import React, { Component } from 'react'
import Tab from 'components/Tab'
import Chart from './Chart12'
import { getTotal } from 'api'
import { getMax, duration } from 'util.js'

export default class Chart12 extends Component {
  state = {
    chartData: [],
    focus: 0,
    max: 0,
  }

  toggle = () => {
    const { focus } = this.state
    if (focus === 0) {
      this.setState({ focus: 1 })
    } else {
      this.setState({ focus: 0 })
    }
  }

  update = () => {
    getTotal().then(res => {
      // console.log(res, 'totol')
      const arr = res.map(d => d.sumDing)
      const max = getMax(arr)
      this.setState({ chartData: res, max })
    })
  }

  componentDidMount = () => {
    this.update()
    setInterval(() => {
      this.toggle()
      this.update()
    }, duration)
  }

  render() {
    const { chartData, max, focus } = this.state
    const year = new Date().getFullYear()
    const tabs = [`${year}年度订单量`, `${year}年度完工量`]
    const sumDing = chartData.map(d => d.sumDing)
    const sumWan = chartData.map(d => d.sumWan)
    return (
      <div className="w-100 h-100 flex flex-column">
        <Tab toggle={this.toggle} tabs={tabs} focus={focus} />
        <Chart sum={focus === 0 ? sumDing : sumWan} max={max} />
      </div>
    )
  }
}
