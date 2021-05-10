import * as React from 'react'
import './Pagination.css'

export default ({ text, isLeftDisabled, isRightDisabled }) => {
  return (
    <section className="Pagination">
      <button disabled={isLeftDisabled}>&lt;</button>
      {text}
      <button disabled={isRightDisabled}>&gt;</button>
    </section>
  )
}
