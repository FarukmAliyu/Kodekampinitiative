
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'; // Ensure it includes .about-header-image-container styling

export default function OurApproach() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="about-header-image-container position-relative d-flex align-items-center justify-content-center"
        style={{
          height: "300px",
          background: "linear-gradient(to right, #007bff, #00c6ff)",
        }}
      >
        <h1 className="text-white fw-bold display-4"></h1>
      </div>

      {/* Main Content Section */}
      <div className="container py-5 mt-5">
        <h1 className="text-primary mb-4"></h1>
        <p className="lead text-muted">
          At KodeKamp, we believe sustainable learning begins with understanding culture, leveraging technology, empowering communities, and tracking impact.
        </p>

        <div className="row text-center mt-5">
          <div className="col-md-6 mb-4">
            <i className="bi bi-globe text-success animated-icon"></i>
            <h4 className="mt-3 text-success">Culturally Responsive Education</h4>
            <p>
              Every curriculum is developed in partnership with community elders, incorporating Hausa language, traditional stories, and local knowledge systems.
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <i className="bi bi-phone text-primary animated-icon"></i>
            <h4 className="mt-3 text-primary">Technology-Enhanced Learning</h4>
            <p>
              Our mobile app and offline-capable platform ensure learning continues even in areas with limited internet connectivity.
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <i className="bi bi-people-fill text-warning animated-icon"></i>
            <h4 className="mt-3 text-warning">Community Ownership</h4>
            <p>
              We train local leaders to run programs, ensuring sustainability and community buy-in from day one.
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <i className="bi bi-graph-up-arrow text-danger animated-icon"></i>
            <h4 className="mt-3 text-danger">Evidence-Based Impact</h4>
            <p>
              Regular assessment and evaluation guide program improvements and demonstrate measurable outcomes to partners and funders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
