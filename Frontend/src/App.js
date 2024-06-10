
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';
import Signup from './Signup';
  
import Login from './Login';
import DashboardPage from './Dashboard';
import Dashboard from './Dashboard';

function App() {
 

  return (
    <div> 
     
      <BrowserRouter>
        {/* <Signup /> */}
       
        <Routes>
        
          <Route path ='/login' element={<Login />} />
          <Route path='/' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
      
      </BrowserRouter>
   </div>
  );
}

export default App;
