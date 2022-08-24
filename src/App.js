import React from 'react';
import './App.css';

import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Reports from './Pages/Reports';
import Products from './Pages/Products';
import Navbar from './Componenet/Navbar';

function App() {
  return (
    <>
      {/* <Router> */}
        
        <Navbar/>
        {/* <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch> */}
        <Routes>
             <Route path="/" element={<Home/>}/>
        </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
