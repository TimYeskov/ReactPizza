import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.scss'
// type PaginationProps={
//   changePage:(page:number)=>void
// }
const PagePagination = ({onChangePage}) => {

  return (
    <ReactPaginate
    className='root'
    breakLabel="..."
    nextLabel={<img src='../img/nextLabel.svg' alt='label' className='imgNext'/>}
    onPageChange={event=>onChangePage(event.selected+1)}
    pageRangeDisplayed={3}
    pageCount={4}
    previousLabel={<img src='../img/prev.svg'  className='imgPrev'/>}
    renderOnZeroPageCount={null}
  /> 
  )
}

export default PagePagination 
