import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './StudentDashboard.css';

const StudentDashboard = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Development: [],
    Business: [],
    Design: [],
    Lifestyle: []
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('Role');
    navigate('/login');
  }

  const api = async () => {
    let url = "https://codehelp-apis.vercel.app/api/get-top-courses";
    let course = await fetch(url);
    let jso = await course.json();
    const { Development, Business, Design, Lifestyle } = jso.data;
    setData({ Development, Business, Design, Lifestyle });
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-card" >
        <h1 className="dashboard-title">STUDENT DASHBOARD</h1>
      </div>
      <div className="courses-container">
        {Object.entries(data).map(([category, courses]) => (
          <div key={category} className="category-section">
            <div className="courses-list">
              {courses.map((course, index) => (
                <div key={index} className="course-card" data-aos="fade-up">
                  <img src={course.image.url} alt={course.title} className="course-image" />
                  <div className="course-info">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="dashboard-logout-btn" onClick={handleLogout} >LOGOUT</button>
    </div>
  );
};

export default StudentDashboard;
