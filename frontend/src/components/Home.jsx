import React, { useEffect, useState } from 'react'
import { Cards } from './cards/Cards'
import { Filters } from './filters/Filters'
import { Pagination } from './pagination/Pagination'
import SearchPage from './search/SearchPage'

const Home = () => {

  const {REACT_APP_URL_API_RYMPRINCIPAL} = process.env
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')

  const [fetchCharacters, updateFetchCharacters] = useState([])
  const {info, results } = fetchCharacters

  const url = `${REACT_APP_URL_API_RYMPRINCIPAL}/character/?page=${pageNumber}&name=${search}`

  async function updateCharacters() {
    const data = await fetch(url).then((res) => res.json())
    // const response = await data
    updateFetchCharacters(data)
  }

  useEffect(() => {
    updateCharacters()
  }, [url])

  return (
    <div className='App'>
      <SearchPage setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className='container'>
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
              {/* <Cards/>
            <Cards/>   */}
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  )
}

export default Home