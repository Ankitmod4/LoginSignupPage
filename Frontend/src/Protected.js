import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
    const Tok = localStorage.getItem('Token'); 
    
   

    return Tok ? <Outlet /> : <Navigate to='/login' />;
    
}

export default Protected;
 