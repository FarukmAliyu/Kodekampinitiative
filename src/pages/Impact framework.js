import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'; // Ensure this CSS file includes the `.about-header-image-container` class

export default function ImpactFramework() {
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
        <h1 className="text-white fw-bold display-4">Impact Framework</h1>
      </div>

      {/* Main Content Section */}
      <div className="container py-5 mt-5">
        <h1 className="text-primary mb-4 text-center"></h1>

        <p className="lead text-muted text-center">
          We measure success across four key dimensions:
        </p>

        <div className="row mt-4 text-center">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-success">Educational Achievement</h5>
                <p className="card-text">
                  Tracking student literacy, numeracy, and digital skills to ensure measurable learning outcomes.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-info">Economic Empowerment</h5>
                <p className="card-text">
                  Preparing students for future employment and entrepreneurship through skill-based learning.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-warning">Social Cohesion</h5>
                <p className="card-text">
                  Promoting teamwork, inclusion, and empathy within learning groups and communities.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-danger">Community Leadership</h5>
                <p className="card-text">
                  Equipping young learners with the confidence and voice to become advocates and changemakers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
