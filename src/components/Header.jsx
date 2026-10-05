
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Header() {

  return (

    <nav className="navbar">

      <div className="navbar-logo">
        To-Do
      </div>

      <div className="navbar-links">

        <Link to="/">
          Home
        </Link>
        

        <Link to="/add-task">
          + Add Task
        </Link>

       
      </div>

    </nav>

  );
}

export default Header;
