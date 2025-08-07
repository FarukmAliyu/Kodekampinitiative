import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'; // Ensure this CSS file includes the `.animated-icon` class
import headerImage from '../assets/blue.jpg'; // ✅ Image import

export default function OurStory() {
  return (
    <div>
      {/* Header Image with Overlayed Intro Content */}
      <div className="about-header-image-container position-relative">
        <img src={headerImage} alt="About Header" className="img-fluid w-100" />
        <div className="header-overlay-content position-absolute top-50 start-50 translate-middle text-white text-center px-4">
          <h1 className="display-5 fw-bold"></h1>
          <p className="lead">
            "KodeKamp began as a technology education initiative, successfully training hundreds of young people in coding and digital skills.
            As we witnessed the transformative power of education in conflict-affected areas, we recognized the need for a more comprehensive approach.
            Today, KodeKamp has evolved into a community education organization that addresses the root causes of educational inequality in Northern Nigeria."
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="container py-5 mt-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-lightning-charge-fill text-primary animated-icon"></i>
            <h3 className="mt-3 text-primary">Super Efficient</h3>
            <p>We believe it. We work towards it. We achieve it.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-heart-fill text-danger animated-icon"></i>
            <h3 className="mt-3 text-danger">Deeply Committed</h3>
            <p>We will not stop until every African child wakes up knowing their future is secured with access to all necessary skills and information.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-award-fill text-success animated-icon"></i>
            <h3 className="mt-3 text-success">Highly Skilled</h3>
            <p>We work with a team of technology leaders to build the best learning tools for kids.</p>
          </div>
        </div>
      </div>
    </div>
  );
}



