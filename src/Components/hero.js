import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './hero.css';

function Hero() {
  return (
    <section className="hero-section text-white text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold">Empowering Communities Through Education</h1>
        <p className="lead">
          Building brighter futures for children and families in Northern Nigeria through innovative, culturally-grounded learning experiences.
        </p>
        <p>
          At KodeKamp, we believe every child deserves access to quality education that honors their heritage while preparing them for tomorrow's opportunities. 
          Our community learning centers blend traditional values with modern skills, creating pathways to prosperity in rural Northern Nigeria.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/funding" className="btn btn-danger btn-lg">
            Explore Our Impact
          </Link>
          <Link to="/volunteering" className="btn btn-outline-light btn-lg">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

