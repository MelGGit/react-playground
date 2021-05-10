import * as React from 'react'
import './Card.css'

export default ({ title, checked }) => {
  return (
    <section className="Card">
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates,
        in.
      </p>
      <div className={checked ? 'bookmark checked' : 'bookmark'}></div>
    </section>
  )
}
