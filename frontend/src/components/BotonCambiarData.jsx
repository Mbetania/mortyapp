import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'


const data = {
    nombre: 'Canela',
    edad: 2
}

const BotonCambiarData = () => {
    const {setData} = useContext(DataContext)

  return (
    <div>
        <button onClick={() =>setData(data)}>camiar data</button>
    </div>
  )
}

export default BotonCambiarData