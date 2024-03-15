import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';
import SVG from "../svg/404.svg"

const PageNotFound = () => {
  return (
    <div className="page-not-found container">
      <img src={SVG} alt="Page Not Found" className="img-fluid mx-auto d-block" />
      <p className="text-center">Oops! The page you're looking for doesn't exist.</p>
      <div className="text-center">
        <Link to="/" className="btn">Go to Home Page</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
