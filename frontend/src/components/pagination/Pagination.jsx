import React from 'react'
import ReactPaginate from 'react-paginate'


export const Pagination = ({info, pageNumber ,setPageNumber}) => {
return (
    <div className='container d-flex justify-content-center'>
        <ReactPaginate 
        className='pagination  gap-4 my-4'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='btn btn'
        previousLabel='Prev'
        nextLinkClassName='btn btn'
        nextLabel='Next'
        activeClassName='active'
        forcePage={pageNumber === 1? 0 : pageNumber - 1}
        onPageChange={(info) =>{setPageNumber(info.selected +1)} }
        pageCount={info?.pages}/>
    </div>
)
}
