import React, { useEffect, useState } from 'react';
import { Header } from './components';
import { Cart, Home } from './pages';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('/db.json').then(({ data }) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home items={pizzas} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
