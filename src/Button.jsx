import './Button.css'
import * as React from 'react'

export default ({ children, clicked }) => {
  return (
    <button className={clicked ? 'Button Button__clicked' : 'Button'}>
      {children}
    </button>
  )
}
