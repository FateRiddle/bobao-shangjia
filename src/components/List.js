import React, { Component } from 'react'
import { textColor } from 'color.js'

export default class List extends Component {
  render() {
    const { name, data = [], color = 'orange' } = this.props
    return (
      <div className="tc h-100 flex-column">
        <header className="button tracked mb2" style={{ background: color }}>
          {name}
        </header>
        <ul
          className="flex flex-column h-100 justify-around list pl0 mv0"
          style={{ color: textColor }}
        >
          {data.map((d, index) => (
            <li className="" key={index}>
              {d}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
