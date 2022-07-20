import React from 'react'
import searchmodule from '../../styles/search/searchmodule.scss'


const SearchPage = ({setPageNumber, setSearch}) => {

  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
      <input
      onChange={(e)=>{
        setPageNumber(1)
        setSearch(e.target.value)
      }}
      type="text"
      className={searchmodule.inputSearch}
      placeholder='Search for Characters'
      />
      <button onClick={e =>{e.preventDefault()}}
      className={`${searchmodule.btn} btn btn-primary fs-5`} >Search</button>
    </form>
  )
}

export default SearchPage