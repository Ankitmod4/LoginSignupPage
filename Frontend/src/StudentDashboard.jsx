
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css'

const StudentDashboard = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('Role');
    navigate('/login');
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">STUDENT DASHBOARD</h1>
        <p className="dashboard-welcome">Welcome to your personalized dashboard. Here you can view and manage your data.</p>
        <button className="dashboard-logout-btn" onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  );
};

export default StudentDashboard;
