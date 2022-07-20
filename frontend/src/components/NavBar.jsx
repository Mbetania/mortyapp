import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import { GrClose, GrMenu } from 'react-icons/gr'



// const paginas = [
  // {
  //   id: 1,
  //   path: '/section/Ricks',
  //   nombre: 'primer catalogo'
  // },
  // {
  //   id: 2,
  //   path: '/section/Mortys',
  //   nombre: 'segundo catalogo'
  // },
  // {
  //   id: 3,
  //   path: '/section/Beths',
  //   nombre: 'tercer catalogo'
  // },
  // {
  //   id: 4,
  //   path: '/section/Jerrys',
  //   nombre: 'cuarto catalogo'
  // },
// ];

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to='/' className='fs-3 ubuntu navbar-brand'>Rick ands <span className='text-primary'>Morty </span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <i className='fas fa-bars open fw-bold text-dark'></i>
          <i className='fas fa-times close fw-bold text-dark'></i>
          {/* <GrMenu/>
          <GrClose/> */}
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5">
              <NavLink activeclassname='active' to='/' className="nav-link active" >Characters</NavLink>
              <NavLink to='/episodes' className="nav-link" >Episodes</NavLink>
              <NavLink to='/location' className="nav-link" >Location</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
{/* <ul>
{paginas.map((page) =>(
  <li key={page.id}>
    <Link to={page.path}>{page.nombre}</Link>
  </li>
))}
</ul> */}