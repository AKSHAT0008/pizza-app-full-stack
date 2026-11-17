import React from "react";
import "../css/not-found.css";
import { Link } from "react-router-dom";
import notfound from '../assets/NOTFOUND.png'
function NotFound() {
   return (
    <div className="not-found-container">
      <div className="not-found-content">
        <img
          src={notfound}
          alt="Not Found Illustration"
          className="not-found-image"
        />
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="go-home-btn">Go Back Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
