import * as React from 'react'
import Header from './Header'
import Pagination from './Pagination'

export default () => {
  return (
    <div>
      <Header isBackButtonVisible>Header with button</Header>
      <Pagination isLeftDisabled text="1/34" />
      <Pagination text="4/34" />
      <Pagination isRightDisabled text="34/34" />
    </div>
  )
}
