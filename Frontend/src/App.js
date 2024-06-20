
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';
import Signup from './Signup';
  
import Login from './Login';
import StudentDashboard from './StudentDashboard';
import Dashboard from './Dashboard';
import Protected from './Protected';

function App() {
  let role=localStorage.getItem('Role');
 
  return (
    <div> 
     
      <BrowserRouter> 
        {/* <Signup /> */} 
       
        <Routes>  
           
          <Route path ='/login' element={<Login  />} />  
          <Route path='/' element={<Signup />} />

          <Route element={<Protected />} >
            {
              role !=='Admin' ? (
                <>   
                  
                 
                  <Route path='/Student' element={<StudentDashboard />} />
                  <Route path='/Admin' element={<StudentDashboard />} />
                </>
              ) : (
                  <>
                     <Route path='/Student' element={<Dashboard />} />
                  <Route path='/Admin' element={<Dashboard />} />
                  </>
              )
            }
          <Route path='/Admin' element={<Dashboard />} /> 
          <Route path='/Student' element={<StudentDashboard />} />
          </Route>
         
          
          </Routes>
      
      </BrowserRouter>
   </div>
  );
}

export default App;
