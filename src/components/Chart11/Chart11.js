import React, { Component } from 'react'
import echarts from 'echarts'
import { orange } from 'color.js'
import { formatNum } from 'util.js'

export default class TotalDan extends Component {
  config = () => {
    const { chartData } = this.props
    const names = chartData.map(d => d.name).reverse()
    const sum = chartData.map(d => d.sum).reverse()
  }

  componentDidMount = () => {
    this.config()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.chartData !== this.props.chartData) {
      this.config()
    }
  }

  render() {
    console.log(this.props.chartData)
    return (
      <ul className="list white f4 w-100">
        {this.props.chartData.map((d, index) => (
          <li key={index} className="flex justify-center tc">
            <div
              className="w-25 pv3 br-pill tracked-mega"
              style={{
                background: orange,
                marginTop: '0.6rem',
                marginBottom: '0.6rem',
              }}
            >
              {d.name}
            </div>
            <div className="w-40 flex items-center justify-center">
              {formatNum(d.sum)}
            </div>
          </li>
        ))}
      </ul>
    )
  }
}
