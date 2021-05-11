import * as React from 'react'
import './Pagination.css'

export default ({ currentPage, totalPages }) => {
  return (
    <section className="Pagination">
      <button disabled={currentPage === 1}>&lt;</button>
      {currentPage}/{totalPages}
      <button disabled={totalPages === currentPage}>&gt;</button>
    </section>
  )
}
