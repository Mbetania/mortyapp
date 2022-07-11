import { Routes, Route } from 'react-router-dom';
import '../styles/App.css'
import { CartProvider } from '../context/DataContext';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import SearchPage from '../components/SearchPage';
import Persons from '../components/Persons';
import PersonsDetail from '../components/PersonsDetail';
import {Contexto} from '../components/Contexto';
import {Cart} from '../components/Cart';
import BotonCambiarData from '../components/BotonCambiarData';




function AppRoutes() {


  return (
    <CartProvider>
      <div>
        <div className='header'>
          <h1>hola hola</h1>
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
      </div>
    </CartProvider>
  );
}

export default AppRoutes;
