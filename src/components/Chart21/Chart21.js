import React, { Component } from 'react'
import echarts from 'echarts'
import { btn1B, btn2B, btn3B } from 'color.js'

const yAxis = ['完工率', '签到率', '预约率']
// const colors = [btn3B, btn3B, btn3B]
const shadowData = [101, 101, 101]

export default class TotalDan extends Component {
  initChart = () => {
    this.chart = echarts.init(this.chartNode)
  }

  config = () => {
    const { sum } = this.props
    // console.log(sum, '21')
    this.chart.setOption({
      // backgroundColor: '#08263a',
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c1}%',
      },
      color: [btn3B, btn2B, btn1B],
      // visualMap: {
      //   show: false,
      //   min: 0,
      //   max: 100,
      //   dimension: 0,
      //   inRange: {
      //     color: [btn1B, btn2B, btn3B],
      //   },
      //   outOfRange: {
      //     color: ['black'],
      //   },
      // },
      grid: {
        top: '3%',
        left: '6%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        show: false,
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            fontSize: 16,
            color: 'white',
          },
        },
        axisTick: {
          show: false,
        },
        data: yAxis,
      },
      series: [
        {
          type: 'bar',
          data: shadowData,
          barGap: '-100%',
          barMaxWidth: 30,
          name: '已执行',
          itemStyle: {
            normal: {
              color: 'black',
              barBorderRadius: 999,
            },
          },
          animationEasing: 'elasticOut',
          animationEasingUpdate: 'ease',
        },
        {
          type: 'bar',
          data: sum,
          barGap: '-100%',
          barMaxWidth: 30,
          name: '已执行',
          label: {
            normal: {
              show: true,
              fontSize: 16,
              formatter: '{c} %',
              position: 'inside',
            },
          },
          itemStyle: {
            normal: {
              barBorderRadius: 999,
              shadowBlur: 10,
              shadowColor: '#111',
            },
          },
          animationEasing: 'elasticOut',
          animationEasingUpdate: 'ease',
        },
      ],
    })
  }

  componentDidMount = () => {
    this.initChart()
    this.config()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.sum !== this.props.sum) {
      this.config()
    }
  }

  componentWillUnmount = () => {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  }

  render() {
    return (
      <div className="w-100" style={{ height: '78%' }} ref={n => (this.chartNode = n)} />
    )
  }
}
