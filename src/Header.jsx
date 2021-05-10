import * as React from 'react'
import './Header.css'

export default ({ children, isBackButtonVisible }) => {
  return (
    <header className="Header">
      <button hidden={!isBackButtonVisible}>&lt;</button>
      {children}
    </header>
  )
}
