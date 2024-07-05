import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'
const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('Role');
    navigate('/login');
  };

  useEffect(() => {
    const url = "https://login-signup-page-lac.vercel.app//api/v1/FetchData";
    axios.get(url)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Your Dashboard</h1>
       
      </header>
      <main className="dashboard-content">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.Email}>
                <td>{item.Name}</td>
                <td>{item.Role}</td>
                <td>{item.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </main>
    </div>
  );
};

export default Dashboard;
