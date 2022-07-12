import React from 'react'
import { Link } from 'react-router-dom'
import {BsBugFill} from 'react-icons/bs'

const paginas = [
  {
    id:1,
    path: '/section/Ricks',
    nombre: 'primer catalogo'
  },
  {
    id:2,
    path:'/section/Mortys',
    nombre: 'segundo catalogo'
  },
  {
    id:3,
    path: '/section/Beths',
    nombre: 'tercer catalogo'
  },
{  id: 4,
  path: '/section/Jerrys',
  nombre: 'cuarto catalogo'
},
];

const NavBar = () => {
  return (
    <>
    <BsBugFill color='violet'/>
    <ul>
    {paginas.map((page) =>(
      <li key={page.id}>
        <Link to={page.path}>{page.nombre}</Link>
      </li>
    ))}
    </ul>
  </>
  )
}

export default NavBar