import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const Persons = () => {
const {pages} = useParams()

const [message, setMessage] = useState('default')

useEffect(() => {
  setMessage(pages)
  switch (pages) {
    case 'Jerrys':
      setMessage('idiota')
      break;
    case 'Mortys':
      setMessage('nieto de Rick')
      break;
    case 'Beths':
      setMessage('hija de Rick')
      break;
    default:
      setMessage('Todos somos Ricks')
      break;
  }
}, [pages])



  return (
    <>
    <p>{message}</p>
    <Link to= '../search-page'> Volver</Link>
    </>
    // <div>{pages==='Jerrys' ? 'idiota' : <p>{pages}</p>}</div>
  )
}

export default Persons