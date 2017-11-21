import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons/css/tachyons.min.css'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./components/App', render)
}

render()

registerServiceWorker()
