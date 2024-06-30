import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = ({ requiredRole }) => {
  const token = localStorage.getItem('Token');
  const role = localStorage.getItem('Role');

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && role !== requiredRole) {
    const redirectPath = role === 'Student' ? '/Student' : '/Admin';
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};

export default Protected;
