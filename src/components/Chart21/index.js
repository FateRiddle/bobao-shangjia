import React, { Component } from 'react'
import Tab from 'components/Tab'
import Chart from './Chart21'
import { get3lv } from 'api'
import { formatYesterday, duration } from 'util.js'

export default class Chart21 extends Component {
  state = {
    total: [],
    tm: [],
    focus: 0,
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
    get3lv(formatYesterday()).then(res => {
      const total = res.map(d => (d.doneYu / d.needYu * 100).toFixed(1)).reverse()
      const tm = res.map(d => (d.doneYuTm / d.needYuTm * 100).toFixed(1)).reverse()
      this.setState({ total, tm })
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
    const { total, tm, focus } = this.state
    // console.log(this.state, '3lv-y')
    const tabs = [`昨日综合三率`, `昨日天猫三率`]
    return (
      <div className="w-100 h-100 flex flex-column pt3">
        <Tab toggle={this.toggle} tabs={tabs} focus={focus} />
        <Chart sum={focus === 0 ? total : tm} />
      </div>
    )
  }
}
