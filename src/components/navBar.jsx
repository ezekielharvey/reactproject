import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="#">
        Vidly
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink class="nav-link" to="/movies">
              Movies <span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/customers">
              Customers
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/rentals">
              Pricing
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
