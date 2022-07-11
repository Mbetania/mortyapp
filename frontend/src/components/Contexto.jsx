import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext} from '../context/DataContext'

export const Contexto = () => {

    const {data} = useContext( DataContext )

    return (
    <div>Contexto
    <pre>
        {JSON.stringify(data, null, 2)}
    </pre>
    <Link to= '../search-page'> Ver Variantes</Link>
    </div>
    )
}

