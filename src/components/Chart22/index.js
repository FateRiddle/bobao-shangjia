import React, { Component } from 'react'
import Tab from 'components/Tab'
import Table from './Table'
import { get3lv } from 'api'
import { formatNow, duration } from 'util.js'

export default class Chart22 extends Component {
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
    get3lv(formatNow()).then(res => {
      // console.log('3lvnow', res)
      const total = res.map(d => ({ need: d.needYu, done: d.doneYu }))
      const tm = res.map(d => ({ need: d.needYuTm, done: d.doneYuTm }))
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
    const tabs = [`今日综合三率`, `今日天猫三率`]
    return (
      <div className="w-100 h-100 flex flex-column pt3">
        <Tab toggle={this.toggle} tabs={tabs} focus={focus} />
        <Table data={focus === 0 ? total : tm} />
      </div>
    )
  }
}
