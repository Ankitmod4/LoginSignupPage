import React from 'react';

const Dashboard = () => {
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
          HELLO, YOU'VE LOGGED IN TO THE DASHBOARD
        </h1>
        <p>
          Welcome to your personalized dashboard. Here you can view and manage your data.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
