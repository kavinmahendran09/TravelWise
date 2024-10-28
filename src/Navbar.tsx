import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ fontSize: '2rem', color: '#ffffff' }}>TravelWise</a> {/* Increased font size */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#" style={{ color: '#ffffff' }}>Home</a>
            <a className="nav-link" href="#" style={{ color: '#ffffff' }}>GitHub</a>
            <a className="nav-link" href="#" style={{ color: '#ffffff' }}>Model</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
