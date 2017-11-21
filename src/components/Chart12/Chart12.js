import React, { Component } from 'react'
import echarts from 'echarts'

const xAxisLabels = new Array(12).fill(0).map((x, i) => i + 1 + '月')

export default class TotalDan extends Component {
  initChart = () => {
    this.chart = echarts.init(this.chartNode)
  }

  config = () => {
    const { sum, max } = this.props
    const shadowData = new Array(12).fill(max)
    this.chart.setOption({
      // backgroundColor: '#08263a',
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c1}单',
      },
      grid: {
        top: '3%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#111',
          },
        },
        data: xAxisLabels,
        axisLabel: {
          textStyle: {
            color: 'white',
            fontSize: 14,
          },
        },
        axisTick: {
          show: false,
        },
      },
      // visualMap: {
      //   show: false,
      //   min: 0,
      //   max: 40,
      //   dimension: 0,
      //   inRange: {
      //     // color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055'],
      //     color: ['rgba(255, 120, 0,0.6)', 'rgba(255, 120, 0, 0.6)'],
      //   },
      // },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: 'white',
            fontSize: 14,
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#111',
          },
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          type: 'bar',
          data: shadowData,
          barMaxWidth: 30,
          name: '目标量',
          barGap: '-100%',
          itemStyle: {
            normal: {
              color: '#111',
              barBorderRadius: 999,
            },
          },
          animationEasing: 'elasticOut',
          animationEasingUpdate: 'ease',
        },
        {
          type: 'bar',
          data: sum,
          barMaxWidth: 30,
          name: '销售量',
          itemStyle: {
            normal: {
              color: '#ff7800',
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
