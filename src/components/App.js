import React, { Component } from 'react'
import 'styles/App.css'
import Title from './Title'
import Chart11 from './Chart11'
import Chart12 from './Chart12'
import Chart13 from './Chart13'
import Chart21 from './Chart21'
import Chart22 from './Chart22'
import Chart23 from './Chart23'
import Chart24 from './Chart24'
import { getTpBtn } from 'api'
import { duration } from 'util.js'

class App extends Component {
  state = {
    top10: [],
    bottom10: [],
  }

  update = () => {
    getTpBtn().then(res => {
      this.setState({ top10: res.slice(0, 10), bottom10: res.slice(10, 20).reverse() })
    })
  }

  componentDidMount = () => {
    this.update()
    setInterval(this.update, duration)
  }

  render() {
    const { top10, bottom10 } = this.state
    return (
      <div className="App flex flex-column vh-100">
        <header className="pt3 flex-none">
          <Title />
        </header>
        <main className="flex flex-wrap justify-center content-between vh-100 pb5 pt3">
          <div className="w-20 h-top mb3 mr2" style={{ background: '#111' }}>
            <Chart11 />
          </div>
          <div className="w-50 h-top mh2 f4">
            <Chart12 />
          </div>
          <div className="w-20 h-top ml2">
            <Chart13 />
          </div>
          <div className="w-20 h-bottom mr2" style={{ background: '#111' }}>
            <Chart21 />
          </div>
          <div className="w-30 h-bottom ml2 pr2" style={{ background: '#111' }}>
            <Chart22 />
          </div>
          <div className="w-20 h-bottom pl2 mr2">
            <Chart23 chartData={top10} />
          </div>
          <div className="w-20 h-bottom ml2">
            <Chart24 chartData={bottom10} />
          </div>
        </main>
      </div>
    )
  }
}

export default App
