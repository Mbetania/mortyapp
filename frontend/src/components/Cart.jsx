import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import  DataContext  from '../context/DataContext'


export const Cart = ({edad, nombre}) => {
    const {data,addEdadDeVida} = useContext( DataContext)


  return (
    <div onClick={() => addEdadDeVida(edad)}>{data.edad}
    <h4>fsds{data.nombre}</h4>
    {/* <pre>
        {JSON.stringify(edad, null, 2)}
    </pre> */}
    <Link to= '../search-page'> Ver Variantes</Link>
    </div>
  )
}

