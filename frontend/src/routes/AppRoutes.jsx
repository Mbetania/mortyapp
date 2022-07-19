import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import '../styles/App.css'
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import SearchPage from '../components/SearchPage';
import { useEffect, useState } from 'react';



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
    // <CartProvider>
      <div>
        <div className='header'>
          <h1>hola hola</h1>
          <NavBar />
        </div>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/search-page' element={<SearchPage />} />
          <Route path='/section/:pages/*' element={<Home/>}>
          </Route>
        </Routes>
        <div>
        </div>
        {/* <Count/> */}
      </div>
    // </CartProvider>
  );
}

export default AppRoutes;
