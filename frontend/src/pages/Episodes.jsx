import React, { useEffect, useState } from 'react'
import { Cards } from '../components/cards/Cards'

export const Episodes = () => {
    const [id, setId] = useState(1)
    const [info, setInfo] = useState([])
    const [results, setResults] = useState([])
    const { air_date, name, } = info

    const api = `https://rickandmortyapi.com/api/episode/${id}`

    useEffect(() => {
        (async function () {
            const data = await fetch(api).then((res) => res.json())
            setInfo(data)

            const ep = await Promise.all(
                data.characters.map((x) => {
                    return fetch(x).then((res) => res.json())
                })
            )
            setResults(ep)
        })()
    }, [api])



    return (
        <div className='container'>
            <div className="row mb-4">⁡
                <h1 className="text-center mb-4">Episode: {''}
                    <span className='text-primary'>{name === '' ? 'Unknown' : name}</span>
                </h1>
                <h5 className="text-center">Air Date {air_date === '' ? 'Unknown' : air_date}</h5>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="text-center mb-4">
                    </div>
                    <div className='container'>
                        <div className="row">
                            <div className="col-3">
                                <div className="text-center">
                                </div>
                                <div className='container'>
                                    <div className="row mb-4">⁡
                                        <h1 className="text-center mb-4">Episode: {''}
                                            <span className='text-primary'>{name === '' ? 'Unknown' : name}</span>
                                        </h1>
                                        <h5 className="text-center">Air Date {air_date === '' ? 'Unknown' : air_date}</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <h4 className="text-center">Pick Episodes</h4>
                                        </div>
                                        <div className="col-8">
                                            <div className="row">
                                                {/* <Cards results={results} /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    {/* <Cards results={results} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                        <Cards results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}
