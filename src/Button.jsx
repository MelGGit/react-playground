import './Button.css'
import * as React from 'react'

export default ({ children, isActive, disabled }) => {
  return (
    <button className={disabled ? 'Button disabled' : 'Button'}>
      {children}
    </button>
  )
}
