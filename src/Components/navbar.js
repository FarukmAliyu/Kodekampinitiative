import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/cropped-D-4uKvnXoAAQzzz.png'; // Update relative path as needed

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="KodeKamp Logo" width="200" height="auto" className="me-2" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">About</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/ourstory">Our Story</Link></li>
                <li><Link className="dropdown-item" to="/team">Team</Link></li>
                <li><Link className="dropdown-item" to="/our-approach">Our Approach</Link></li>
                <li><Link className="dropdown-item" to="/impact-framework">Impact Framework</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Programs</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/early-childhood">Early Childhood</Link></li>
                <li><a className="dropdown-item" href="#">Primary</a></li>
                <li><a className="dropdown-item" href="#">Secondary</a></li>
                <li><a className="dropdown-item" href="#">Community Training</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Community Impact</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Stories</a></li>
                <li><a className="dropdown-item" href="#">Data</a></li>
                <li><a className="dropdown-item" href="#">Research</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Partnerships</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Current Partners</a></li>
                <li><Link className="dropdown-item" to="/opportunities">Opportunities</Link></li>
                <li><a className="dropdown-item" href="#">Resources</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Get Involved</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/funding">Funding</Link></li>
                <li><Link className="dropdown-item" to="/volunteering">Volunteering</Link></li>
                <li><a className="dropdown-item" href="#">Communities</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Resources</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Blog</a></li>
                <li><a className="dropdown-item" href="#">Reports</a></li>
                <li><a className="dropdown-item" href="#">Media Kit</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
