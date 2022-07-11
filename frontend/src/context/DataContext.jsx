import React from 'react'
import { createContext, useState } from "react"

export const DataContext = createContext()

const dataFixed = {
    nombre: 'betania',
    edad: 26
}

export const CartProvider = ({ children }) => {

    const [data, setData] = useState(dataFixed)

    return (
        <DataContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </DataContext.Provider>
    )
}

