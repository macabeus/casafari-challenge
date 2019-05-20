import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const ContactPagination = ({
  currentPage,
  onClickPaginationHandle,
  totalPages,
}) => {
  const range = [...Array(totalPages).keys()]

  const paginationItem = range.map((rangeInteration) => {
    const page = rangeInteration + 1
    const isActivePage = page === currentPage

    return (
      <PaginationItem active={isActivePage} key={page}>
        <PaginationLink
          onClick={() => onClickPaginationHandle(page, isActivePage)}
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    )
  })

  return (
    <Pagination aria-label="Page navigation example">
      {paginationItem}
    </Pagination>
  )
}

ContactPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onClickPaginationHandle: PropTypes.func,
  totalPages: PropTypes.number.isRequired,
}

ContactPagination.defaultProps = {
  onClickPaginationHandle: () => {},
}

export default ContactPagination
