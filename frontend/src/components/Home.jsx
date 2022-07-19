import React, { useEffect, useState } from 'react'
import { Cards } from './cards/Cards'
import { Filters } from './filters/Filters'

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1)
  const [fetchCharacters, updateFetchCharacters] = useState([])
  const { info, results } = fetchCharacters

  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json())
      updateFetchCharacters(data)
    })()

  }, [url])

  return (
    <div className='App'>
      <h1 className='text-center ubuntu my-4'>Rick ands <span className='text-primary'>Morty </span></h1>
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
    </div>
  )
}

export default Home