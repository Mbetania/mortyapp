import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import '../styles/App.css'
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';
import { Episodes } from '../pages/Episodes';
import { Location } from '../pages/Location';




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
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/location' element={<Location />} />
          {/* <Route path='/section/:pages/*' element={<Home/>}>
          </Route> */}
        </Routes>
        <div>
        </div>
      </div>
    // </CartProvider>
  );
}

export default AppRoutes;
