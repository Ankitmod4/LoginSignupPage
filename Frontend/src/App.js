import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Signup from './Signup';
import Login from './Login';
import StudentDashboard from './StudentDashboard';
import Dashboard from './Dashboard';
import Protected from './Protected';
import Default from './Default';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Signup />} />
         
          <Route element={<Protected requiredRole="Student" />}>
            <Route path="/Student" element={<StudentDashboard />} />
          </Route>
          
          <Route element={<Protected requiredRole="Admin" />}>
            <Route path="/Admin" element={<Dashboard />} />
          </Route>
          
          <Route path='*' element={<Default />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
