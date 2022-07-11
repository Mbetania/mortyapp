import { createContext, useState } from "react"
import React from 'react'

const DataContext = createContext();

const dataFixed = {
    nombre: 'betania',
    edad: 26
}

export function CartProvider({ children }) {
    const [data, setData] = useState(dataFixed);

    const addEdadDeVida = () => {
        setData({nombre:data.nombre, edad:Number(data.edad)+1});
    };

    return (
        <DataContext.Provider value={{
            data,
            setData,
            addEdadDeVida,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext

