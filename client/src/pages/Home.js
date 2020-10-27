import "./home.css";  
import React from 'react';
import { Link } from 'react-router-dom';



function Home() {
  


  return (
    <div className="container">
      <div className="card">
        <h1>Veteran Discount App</h1>
        <h3>Helping Veterans find the discounts they deserve</h3>

        <div style={{display: "flex"}}>
          <Link to="/login" className="btn btn-block btn-dark">Login</Link>
          <Link to="/register" className="btn btn-dark">Register</Link>
        </div>
      </div>
      
      
    </div>
  );
};

export default Home;