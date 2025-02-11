import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">University Finder</Link>
          <div>
            <Link className="btn btn-light" to="/favorites">Favorites</Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;