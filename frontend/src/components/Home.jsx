import React, { useEffect, useState } from 'react'
import { getCharacters, getLocations } from '../services/onboarding.service'
import { Cards } from './cards/Cards'
import { Filters } from './filters/Filters'
import { Pagination } from './pagination/Pagination'
import SearchPage from './search/SearchPage'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('a')

  const [fetchCharacters, setFetchCharacters] = useState([])

  async function updateCharacters() {
    try {
      const query = `page=${pageNumber}&name=${search}`
      const data = await getCharacters(query)
      setFetchCharacters(data.results)
      console.log(data.results)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    updateCharacters()
    // try {
    //   const query = `page=${pageNumber}&name=${search}`
    //   const data = await getLocations(query)
    //   console.log(data)
    // } catch (error) {
    //   console.log(error)
    // }
  }, [])

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
              {loading ? <>CARGANDO PERRA</> :
              <Cards characters={fetchCharacters} /> 
              }
            </div>
          </div>
        </div>
      </div>

      {/* <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/> */}
    </div>
  )
}

export default Home