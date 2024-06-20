import React from 'react';
import { useNavigate } from 'react-router-dom';
const StudentDashboard = (props) => { 
  const navigate = useNavigate();
 const  handle = () => {
    localStorage.removeItem('Token');
   localStorage.removeItem('Role');
   navigate('/login');
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          backgroundColor: '#ffffff',
        }}
      >
        <h1
          style={{
            color: '#007bff',
            marginBottom: '10px',
          }}
        > 
          STUDENT DASHBOARD
        </h1>
        <p>
          Welcome to your personalized dashboard. Here you can view and manage your data.
        </p>
        <button onClick={handle} >LOGOUT</button>
      </div>
      
    </div> 
    
  );
};

export default StudentDashboard;
