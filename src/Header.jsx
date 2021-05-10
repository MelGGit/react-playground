import * as React from 'react'
import './Header.css'

export default ({ isBackButtonVisible }) => {
  return (
    <header className="Header">
      <button hidden={!isBackButtonVisible}>&lt;</button>
      Home
    </header>
  )
}
