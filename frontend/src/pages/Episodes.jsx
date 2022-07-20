import React, { useEffect, useState } from 'react'

export const Episodes = () => {
    const [id, setId] = useState(1)
    const [info, setInfo] = useState([])
    const {air_date, name,} = info
    console.log(info)

    const api = `https://rickandmortyapi.com/api/episode/${id}`

    useEffect(() => {
        (async function(){
            const data = await fetch(api).then((res) => res.json())
            setInfo(data)
        })()
    }, [api])
    

return (
    <div className='container'>
        <div className="row">
            ⁡⁢⁢⁣{/* ME QUEDE EN MIN 3:33:58 AGREGANDO BOOLEAN AL CODIGO */}⁡
            <h1 className="text-center mb-4">Episode: {name ==='' ? 'Unknown' : name}</h1>
            <h5 className="text-center">Air Date {air_date ==='' ? 'Unknown' : air_date}</h5>
        </div>
        <div className="row"></div>
    </div>
)
}
