import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import PersonsDetail from './PersonsDetail'

const Persons = () => {
  let [pageNumber, setPageNumber] = useState(1)
  const [fetchCharacters, updateFetchCharacters] = useState([])
  const {info, results} = fetchCharacters
  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
  console.log(results)
  const [characterList, setCharacterList] = useState([])

  // const getCharacter = async (character) =>{

  //   setLoading(true)
  //   try {
  //     const result = await fetch(url)
  //     const character = await result.json()
  //     setCharacterList(character.results)
  //     console.table(character.results)
  //   }catch(error){
  //     console.log(error)
  //   }finally{
  //     setLoading(false)
  //   }
  // }


  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json())
      updateFetchCharacters(data)
    })()

    // getCharacter()
  }, [url])
  
  
  // const [message, setMessage] = useState('default')
//   const {pages} = useParams()
// useEffect(() => {
//   setMessage(pages)
//   switch (pages) {
//     case 'Jerrys':
//       setMessage('idiota')
//       break;
//   }
// }, [pages])



  return (
    <>
    <PersonsDetail array={characterList}/>
    <Link to= '../search-page'> Volver</Link>
    </>
    // <div>{pages==='Jerrys' ? 'idiota' : <p>{pages}</p>}</div>
  )
}

export default Persons