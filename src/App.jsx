import * as React from 'react'
import Card from './Card'
import Header from './Header'
import Pagination from './Pagination'

export default () => {
  return (
    <div>
      <Pagination totalPages={34} currentPage={1} />
      <Pagination totalPages={34} currentPage={2} />
      <Pagination totalPages={34} currentPage={34} />
    </div>
  )
}
