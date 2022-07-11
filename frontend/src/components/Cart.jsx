import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

export const Cart = () => {
    const {data} = useContext( DataContext)

  return (
    <div>Cart
    <pre>
        {JSON.stringify(data, null, 2)}
    </pre>
    <Link to= '../search-page'> Ver Variantes</Link>
    </div>
  )
}

