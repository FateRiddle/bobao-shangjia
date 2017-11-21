import React, { Component } from 'react'
import { btn1, btn2, btn3, orange } from 'color.js'

const type = ['预约', '签到', '完工']
const colors = [btn1, btn2, btn3]

const title = ['需执行', '已执行', '执行率', '得分']

export default class DataTable extends Component {
  render() {
    const _data = this.props.data.map((d, index) => ({
      type: type[index],
      color: colors[index],
      ...d,
    }))
    return (
      <ul className="list flex flex-column h-75 justify-around ma2">
        {/* 标题 */}
        <ul className="list flex">
          <li className="w-20" />
          {title.map((d, index) => (
            <li key={index} className="w-30">
              <div className="button w-70 tc center" style={{ background: orange }}>
                {d}
              </div>
            </li>
          ))}
        </ul>
        {/* 内容 */}
        {_data.map((d, index) => (
          <ul key={index} className="list flex tc white">
            <li className="w-20">
              <div className="button w-70 tc center" style={{ background: d.color }}>
                {d.type}
              </div>
            </li>
            <li className="w-30">{d.need}</li>
            <li className="w-30">{d.done}</li>
            <li className="w-30">{(d.done / d.need * 100).toFixed(1) + '%'}</li>
            <li className="w-30">{(d.done / d.need * 100).toFixed(1)}</li>
          </ul>
        ))}
      </ul>
    )
  }
}
