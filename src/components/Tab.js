import React, { Component } from 'react'

export default class Tab extends Component {
  _toggle = index => {
    const { toggle, focus } = this.props
    if (index !== focus) {
      toggle()
    }
  }

  render() {
    const { tabs, focus } = this.props
    return (
      <div
        className="flex justify-around mb3 b"
        style={{ paddingLeft: '17%', paddingRight: '17%' }}
      >
        {tabs.map((d, index) => (
          <div
            key={index}
            className={`${index === focus
              ? 'bb b--orange white'
              : 'gray pointer'} pt3 pb1`}
            onClick={() => this._toggle(index)}
          >
            {d}
          </div>
        ))}
      </div>
    )
  }
}
