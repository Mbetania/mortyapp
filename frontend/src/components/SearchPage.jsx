import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Persons from './Persons'

const SearchPage = () => {
  // const firstSection = '/firstSection'

  return (
    <>
    <Link to={Home}>Home</Link>

    {/* <Link to={Persons}> section</Link> */}
    </>
  )
}

export default SearchPage