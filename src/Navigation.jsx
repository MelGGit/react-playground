import * as React from 'react'
import Button from './Button'
import './Navigation.css'

export default function Navigation({ navButtons, clicked }) {
  return (
    <nav className="Navigation">
      {navButtons.map(el => {
        return (
          <Button key={el} clicked={clicked === el ? true : false}>
            {el}
          </Button>
        )
      })}
    </nav>
  )
}
