import { Routes, Route } from 'react-router-dom';
import '../styles/App.css'
//? Este es el contexto*//
import { CartProvider } from '../context/DataContext';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import SearchPage from '../components/SearchPage';
import Persons from '../components/Persons';
import PersonsDetail from '../components/PersonsDetail';
//* Contexto es un componente*//
import {Contexto} from '../components/Contexto';
import {Cart} from '../components/Cart';
import BotonCambiarData from '../components/BotonCambiarData';
import { BotonModal } from '../components/BotonModal';
import { Botonera } from '../components/botones/Botonera';
import { useEffect, useState } from 'react';
import { Semaforo } from '../components/semaforo/Semaforo';




function AppRoutes() {
  const [color, setColor] = useState(0)
  const [body, setBody] = useState({
    color: color,
    isCold: false
  })
  useEffect(() => {
    setBody ({
      ...body,
      color: color
    })
  }, [color])
  

  return (
    <CartProvider>
      <div>
        <div className='header'>
          <h1>hola hola</h1>
          {/* <BotonModal/> */}
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-page' element={<SearchPage />} />
          <Route path='/section/:pages/*' element={<Persons />}>
            <Route path='variantes' element={<PersonsDetail />} />
          </Route>
          <Route path='/context' element={<Contexto />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
        <BotonCambiarData />
        <Botonera color={color} setColor={setColor}/>
        <div>
          <Semaforo/>
        </div>
      </div>
    </CartProvider>
  );
}

export default AppRoutes;
